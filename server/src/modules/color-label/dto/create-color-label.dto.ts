import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';
import { COLOR_HEX_REGEX } from 'src/utils/consts';
import { ValidationError } from 'src/utils/error-messages';

export class CreateColorLabelDto {
  @ApiProperty({ example: '#FFFDDD', description: 'Label color' })
  @IsString({ message: ValidationError.IS_STRING })
  @Matches(COLOR_HEX_REGEX, { message: ValidationError.IS_COLOR_MATCH })
  readonly color: string;
}
