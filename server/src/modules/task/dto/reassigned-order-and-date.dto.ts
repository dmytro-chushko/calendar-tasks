import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Matches } from 'class-validator';

import { DATE_REGEX } from 'src/utils/consts';
import { ValidationError } from 'src/utils/error-messages';

export class ReassignedOrderAndDateDto {
  @ApiProperty({
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
    description: 'Draggable task id',
  })
  @IsString({ message: ValidationError.IS_STRING })
  readonly draggableTaskId: string;

  @ApiProperty({
    example: '2024-02-15',
    description: 'Date that reassigned to the task',
  })
  @IsString({ message: ValidationError.IS_STRING })
  @Matches(DATE_REGEX, { message: ValidationError.IS_DATE })
  readonly reassignedDate: string;

  @ApiProperty({
    description: 'Order that reassigned to the task in a certain list',
    example: 1,
  })
  @IsNumber({}, { message: ValidationError.IS_NUMBER })
  reassignedOrder?: number;
}
