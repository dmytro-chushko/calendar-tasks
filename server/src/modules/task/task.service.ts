import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';

import { checkAndReturnEntity } from 'src/utils/helpers/check-and-return';
import { ColorLabelService } from '../color-label/color-label.service';
import { TextLabelService } from '../text-label/text-label.service';
import { AssignLabelDto } from './dto/assign-label.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { ReassignDateDto } from './dto/reassign-date.dto';
import { ReassignedOrderAndDateDto } from './dto/reassigned-order-and-date.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
    private readonly textLabelService: TextLabelService,
    private readonly colorLabelService: ColorLabelService,
  ) {}

  async create({ assignedDate }: CreateTaskDto): Promise<Task> {
    const existingTasksNum = await this.taskRepository.countBy({
      assignedDate: assignedDate,
    });
    const newTask = this.taskRepository.create({
      assignedDate: assignedDate,
      order: existingTasksNum ? existingTasksNum + 1 : 1,
    });

    return await this.taskRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find({
      order: { order: 'DESC' },
      relations: {
        textLabels: true,
        colorLabels: true,
      },
      select: {
        textLabels: {
          id: true,
          text: true,
        },
        colorLabels: {
          id: true,
          color: true,
        },
      },
    });
  }

  async findAllByDate(date: string): Promise<Task[]> {
    const task = await this.taskRepository.find({
      where: {
        assignedDate: date,
      },
    });

    return task;
  }

  async findOne(id: string): Promise<Task> {
    const task = await checkAndReturnEntity<Task>(this.taskRepository, {
      where: { id },
      relations: {
        textLabels: true,
        colorLabels: true,
      },
      select: {
        textLabels: {
          id: true,
          text: true,
        },
        colorLabels: {
          id: true,
          color: true,
        },
      },
    });

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);

    const updatedTask = await this.taskRepository.save({
      ...task,
      ...updateTaskDto,
    });

    return updatedTask;
  }

  async remove(id: string): Promise<Task> {
    const task = await this.findOne(id);

    const removedTask = await this.taskRepository.remove(task);

    await this.taskRepository.decrement(
      {
        assignedDate: task.assignedDate,
        order: MoreThan(task.order),
      },
      'order',
      1,
    );

    return removedTask;
  }

  async assignTextLabel(dto: AssignLabelDto): Promise<Task> {
    const task = await this.findOne(dto.taskId);
    const textLabel = await this.textLabelService.findOne(dto.labelId);

    task.textLabels.push(textLabel);

    return await this.taskRepository.save(task);
  }

  async unassignTextLabel(dto: AssignLabelDto): Promise<Task> {
    const task = await this.findOne(dto.taskId);

    task.textLabels = task.textLabels.filter(({ id }) => id !== dto.labelId);

    return await this.taskRepository.save(task);
  }

  async assignColorLabel(dto: AssignLabelDto): Promise<Task> {
    const task = await this.findOne(dto.taskId);
    const colorLabel = await this.colorLabelService.findOne(dto.labelId);

    task.colorLabels.push(colorLabel);

    return await this.taskRepository.save(task);
  }

  async unassignColorLabel(dto: AssignLabelDto): Promise<Task> {
    const task = await this.findOne(dto.taskId);

    task.colorLabels = task.colorLabels.filter(({ id }) => id !== dto.labelId);

    return await this.taskRepository.save(task);
  }

  async reassignDate(dto: ReassignDateDto): Promise<Task> {
    const draggableTask = await this.findOne(dto.draggableTaskId);
    const existingTasksNum = await this.taskRepository.countBy({
      assignedDate: dto.reassignedDate,
    });
    const updatedTask = await this.taskRepository.save({
      ...draggableTask,
      assignedDate: dto.reassignedDate,
      order: existingTasksNum + 1,
    });

    return updatedTask;
  }

  async reassignOrderAndDate(dto: ReassignedOrderAndDateDto): Promise<Task> {
    const draggableTask = await this.findOne(dto.draggableTaskId);
    const existingTasksNum = await this.taskRepository.countBy({
      assignedDate: dto.reassignedDate,
    });

    if (draggableTask.assignedDate === dto.reassignedDate) {
      await this.taskRepository[
        draggableTask.order > dto.reassignedOrder ? 'increment' : 'decrement'
      ](
        {
          assignedDate: dto.reassignedDate,
          order:
            draggableTask.order > dto.reassignedOrder
              ? Between(dto.reassignedOrder, draggableTask.order)
              : Between(draggableTask.order, dto.reassignedOrder),
        },
        'order',
        1,
      );
    } else {
      await this.taskRepository.decrement(
        {
          assignedDate: draggableTask.assignedDate,
          order: MoreThan(draggableTask.order),
        },
        'order',
        1,
      );

      await this.taskRepository.increment(
        {
          assignedDate: dto.reassignedDate,
          order: MoreThanOrEqual(dto.reassignedOrder),
        },
        'order',
        1,
      );
    }

    const updatedTask = await this.taskRepository.save({
      ...draggableTask,
      assignedDate: dto.reassignedDate,
      order:
        dto.reassignedOrder === existingTasksNum
          ? existingTasksNum + 1
          : dto.reassignedOrder,
    });

    return updatedTask;
  }
}
