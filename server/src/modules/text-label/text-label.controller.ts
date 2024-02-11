import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ROUTE } from 'src/utils/consts';
import { CreateTextLabelDto } from './dto/create-text-label.dto';
import { UpdateTextLabelDto } from './dto/update-text-label.dto';
import { TextLabel } from './entities/text-label.entity';
import { TextLabelService } from './text-label.service';

@ApiTags('Text label')
@Controller(ROUTE.TEXT_LABEL)
export class TextLabelController {
  constructor(private readonly textLabelService: TextLabelService) {}

  @ApiOperation({ summary: 'Create new text label' })
  @ApiResponse({ status: 201, type: TextLabel })
  @Post()
  create(@Body() createTextLabelDto: CreateTextLabelDto) {
    return this.textLabelService.create(createTextLabelDto);
  }

  @ApiOperation({ summary: 'Get all text labels' })
  @ApiResponse({ status: 200, type: [TextLabel] })
  @Get()
  findAll() {
    return this.textLabelService.findAll();
  }

  @ApiOperation({ summary: 'Get text label by id' })
  @ApiResponse({ status: 200, type: TextLabel })
  @Get(ROUTE.PARAM_ID)
  findOne(@Param('id') id: string) {
    return this.textLabelService.findOne(id);
  }

  @ApiOperation({ summary: 'Update text label' })
  @ApiResponse({
    status: 200,
    type: TextLabel,
  })
  @Patch(ROUTE.PARAM_ID)
  update(
    @Param('id') id: string,
    @Body() updateTextLabelDto: UpdateTextLabelDto,
  ) {
    return this.textLabelService.update(id, updateTextLabelDto);
  }

  @ApiOperation({ summary: 'Remove text label' })
  @ApiResponse({
    status: 200,
    type: TextLabel,
  })
  @Delete(ROUTE.PARAM_ID)
  remove(@Param('id') id: string) {
    return this.textLabelService.remove(id);
  }
}
