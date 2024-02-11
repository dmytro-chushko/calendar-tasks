import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

import { VALIDATION_ERROR } from 'src/utils/error-messages';

export class CreateTextLabelDto {
  @ApiProperty({ example: 'Primary', description: 'Label text' })
  @IsString({ message: VALIDATION_ERROR.IS_STRING })
  @MaxLength(20, { message: `${VALIDATION_ERROR.MAX_LENGTH} 20` })
  readonly text: string;
}
