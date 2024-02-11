import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';
import { COLOR_HEX_REGEX } from 'src/utils/consts';
import { VALIDATION_ERROR } from 'src/utils/error-messages';

export class CreateColorLabelDto {
  @ApiProperty({ example: '#FFFDDD', description: 'Label color' })
  @IsString({ message: VALIDATION_ERROR.IS_STRING })
  @Matches(COLOR_HEX_REGEX, { message: VALIDATION_ERROR.IS_COLOR_MATCH })
  readonly color: string;
}
