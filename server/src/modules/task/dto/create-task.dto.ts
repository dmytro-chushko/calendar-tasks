import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';

import { ValidationError } from 'src/utils/error-messages';
import { DATE_REGEX } from 'src/utils/consts';

export class CreateTaskDto {
  @ApiProperty({
    example: '2024-02-15',
    description: 'Date assigned to the task',
  })
  @IsString({ message: ValidationError.IS_STRING })
  @Matches(DATE_REGEX, { message: ValidationError.IS_DATE })
  readonly assignedDate: string;
}
