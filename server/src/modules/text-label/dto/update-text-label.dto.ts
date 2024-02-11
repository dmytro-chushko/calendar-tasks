import { PartialType } from '@nestjs/swagger';
import { CreateTextLabelDto } from './create-text-label.dto';

export class UpdateTextLabelDto extends PartialType(CreateTextLabelDto) {}
