import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { ValidationError } from 'src/utils/error-messages';

export class AssignLabelDto {
  @ApiProperty({
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
    description: 'Task id',
  })
  @IsString({ message: ValidationError.IS_STRING })
  readonly taskId: string;

  @ApiProperty({
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
    description: 'Text label id',
  })
  @IsString({ message: ValidationError.IS_STRING })
  readonly labelId: string;
}
