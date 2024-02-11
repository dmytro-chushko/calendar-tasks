import { PartialType } from '@nestjs/swagger';
import { CreateColorLabelDto } from './create-color-label.dto';

export class UpdateColorLabelDto extends PartialType(CreateColorLabelDto) {}
