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
import { ApiName, AppRoute } from 'src/utils/consts';
import { ColorLabelService } from './color-label.service';
import { CreateColorLabelDto } from './dto/create-color-label.dto';
import { UpdateColorLabelDto } from './dto/update-color-label.dto';
import { ColorLabel } from './entities/color-label.entity';

@ApiTags(ApiName.COLOR_LABEL)
@Controller(AppRoute.COLOR_LABEL)
export class ColorLabelController {
  constructor(private readonly colorLabelService: ColorLabelService) {}

  @ApiOperation({ summary: 'Create new color label' })
  @ApiResponse({ status: 201, type: ColorLabel })
  @Post()
  create(@Body() createColorLabelDto: CreateColorLabelDto) {
    return this.colorLabelService.create(createColorLabelDto);
  }

  @ApiOperation({ summary: 'Get all color label' })
  @ApiResponse({ status: 200, type: [ColorLabel] })
  @Get()
  findAll() {
    return this.colorLabelService.findAll();
  }

  @ApiOperation({ summary: 'Get color label by id' })
  @ApiResponse({ status: 200, type: ColorLabel })
  @Get(AppRoute.PARAM_ID)
  findOne(@Param('id') id: string) {
    return this.colorLabelService.findOne(id);
  }

  @ApiOperation({ summary: 'Update color label' })
  @ApiResponse({
    status: 200,
    type: ColorLabel,
  })
  @Patch(AppRoute.PARAM_ID)
  update(
    @Param('id') id: string,
    @Body() updateColorLabelDto: UpdateColorLabelDto,
  ) {
    return this.colorLabelService.update(id, updateColorLabelDto);
  }

  @ApiOperation({ summary: 'Remove color label' })
  @ApiResponse({
    status: 200,
    type: ColorLabel,
  })
  @Delete(AppRoute.PARAM_ID)
  remove(@Param('id') id: string) {
    return this.colorLabelService.remove(id);
  }
}
