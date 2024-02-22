import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ApiName, AppRoute } from 'src/utils/consts';
import { AssignLabelDto } from './dto/assign-label.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';

@ApiTags(ApiName.TASK)
@Controller(AppRoute.TASK)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Create new task' })
  @ApiResponse({ status: 201, type: Task })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @ApiOperation({ summary: 'Get all tasks by date' })
  @ApiResponse({ status: 200, type: [Task] })
  @ApiQuery({ example: '?date=2024-02-15' })
  @Get(AppRoute.BY_DATE)
  findAllByDate(@Query('date') date: string): Promise<Task[]> {
    return this.taskService.findAllByDate(date);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.taskService.findOne(+id);
  // }

  @ApiOperation({ summary: 'Update task data' })
  @ApiResponse({ status: 200, type: Task })
  @Patch(AppRoute.PARAM_ID)
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, updateTaskDto);
  }

  @ApiOperation({ summary: 'Remove task' })
  @ApiResponse({
    status: 200,
    type: Task,
  })
  @Delete(AppRoute.PARAM_ID)
  remove(@Param('id') id: string): Promise<Task> {
    return this.taskService.remove(id);
  }

  @ApiOperation({ summary: 'Assign text label' })
  @ApiResponse({ status: 200, type: Task })
  @Post(AppRoute.ASSING_TEXT_LABEL)
  assignTextLabel(@Body() dto: AssignLabelDto): Promise<Task> {
    return this.taskService.assignTextLabel(dto);
  }

  @ApiOperation({ summary: 'Unassign text label' })
  @ApiResponse({ status: 200, type: Task })
  @Post(AppRoute.UNASSIGN_TEXT_LABEL)
  unAssignTextLabel(@Body() dto: AssignLabelDto): Promise<Task> {
    return this.taskService.unassignTextLabel(dto);
  }

  @ApiOperation({ summary: 'Assign color label' })
  @ApiResponse({ status: 200, type: Task })
  @Post(AppRoute.ASSING_COLOR_LABEL)
  assignColorLabel(@Body() dto: AssignLabelDto): Promise<Task> {
    return this.taskService.assignColorLabel(dto);
  }

  @ApiOperation({ summary: 'Unassign color label' })
  @ApiResponse({ status: 200, type: Task })
  @Post(AppRoute.UNASSIGN_COLOR_LABEL)
  unAssignColorLabel(@Body() dto: AssignLabelDto): Promise<Task> {
    return this.taskService.unassignColorLabel(dto);
  }
}
