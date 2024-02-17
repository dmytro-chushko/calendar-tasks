import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

import { ValidationError } from 'src/utils/error-messages';

export class CreateTextLabelDto {
  @ApiProperty({ example: 'Primary', description: 'Label text' })
  @IsString({ message: ValidationError.IS_STRING })
  @MaxLength(20, { message: `${ValidationError.MAX_LENGTH} 20` })
  readonly text: string;
}
