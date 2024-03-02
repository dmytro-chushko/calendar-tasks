import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

import { ValidationError } from 'src/utils/error-messages';

export class FilterValuesDto {
  @ApiProperty({
    example: 'First task',
    description: 'Task name',
  })
  @IsString({ message: ValidationError.IS_STRING })
  readonly taskName: string;

  @ApiProperty({
    example: '[986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e]',
    description: 'Array of color labels` ids',
  })
  @IsArray({ message: ValidationError.IS_ARRAY })
  readonly colorLabelIds: string[];

  @ApiProperty({
    example: '[986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e]',
    description: 'Array of text labels` ids',
  })
  @IsArray({ message: ValidationError.IS_ARRAY })
  readonly textLabelIds: string[];
}
