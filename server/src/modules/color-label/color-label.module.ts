import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ColorLabelService } from './color-label.service';
import { ColorLabelController } from './color-label.controller';
import { ColorLabel } from './entities/color-label.entity';
import { Task } from '../task/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColorLabel, Task])],
  controllers: [ColorLabelController],
  providers: [ColorLabelService],
})
export class ColorLabelModule {}
