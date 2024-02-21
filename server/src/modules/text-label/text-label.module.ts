import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TextLabel } from './entities/text-label.entity';
import { TextLabelController } from './text-label.controller';
import { TextLabelService } from './text-label.service';
import { Task } from '../task/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TextLabel, Task])],
  exports: [TextLabelService],
  controllers: [TextLabelController],
  providers: [TextLabelService],
})
export class TextLabelModule {}
