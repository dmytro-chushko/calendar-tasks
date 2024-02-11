import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TextLabel } from './entities/text-label.entity';
import { TextLabelController } from './text-label.controller';
import { TextLabelService } from './text-label.service';

@Module({
  imports: [TypeOrmModule.forFeature([TextLabel])],
  controllers: [TextLabelController],
  providers: [TextLabelService],
})
export class TextLabelModule {}
