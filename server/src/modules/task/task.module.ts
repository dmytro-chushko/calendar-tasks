import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ColorLabel } from '../color-label/entities/color-label.entity';
import { TextLabel } from '../text-label/entities/text-label.entity';
import { Task } from './entities/task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TextLabel, ColorLabel])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}