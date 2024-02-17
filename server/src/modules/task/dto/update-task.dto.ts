import { ApiProperty, PartialType } from '@nestjs/swagger';

import { CreateTaskDto } from './create-task.dto';
import { IsString, MaxLength } from 'class-validator';
import { ValidationError } from 'src/utils/error-messages';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    description: 'Task description',
    example: 'To do smth with some requirements',
  })
  @IsString({ message: ValidationError.IS_STRING })
  @MaxLength(100, { message: `${ValidationError.MAX_LENGTH} 100` })
  readonly description?: string;
}
