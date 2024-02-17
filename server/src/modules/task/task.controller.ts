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
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';
import { ApiName, AppRoute } from 'src/utils/consts';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(ApiName.TASK)
@Controller(AppRoute.TASK)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get(AppRoute.BY_DATE)
  findOneByDate(@Query('date') date: string) {
    return this.taskService.findOneByDate(date);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.taskService.findOne(+id);
  // }

  @Patch(AppRoute.PARAM_ID)
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(AppRoute.PARAM_ID)
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
