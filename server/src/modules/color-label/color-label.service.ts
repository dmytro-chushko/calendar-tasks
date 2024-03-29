import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { checkAndReturnEntity } from 'src/utils/helpers/check-and-return';
import { CreateColorLabelDto } from './dto/create-color-label.dto';
import { UpdateColorLabelDto } from './dto/update-color-label.dto';
import { ColorLabel } from './entities/color-label.entity';
import { EXCEPTION_MESSAGE } from 'src/utils/error-messages';

@Injectable()
export class ColorLabelService {
  constructor(
    @InjectRepository(ColorLabel)
    private readonly colorLabelRepository: Repository<ColorLabel>,
  ) {}

  async create(createColorLabelDto: CreateColorLabelDto): Promise<ColorLabel> {
    const textLabel = await this.colorLabelRepository.findOne({
      where: { color: createColorLabelDto.color },
    });
    if (textLabel) {
      throw new HttpException(
        EXCEPTION_MESSAGE.ALREADY_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    }

    const newColorLabel = this.colorLabelRepository.create(createColorLabelDto);

    return await this.colorLabelRepository.save(newColorLabel);
  }

  async findAll(): Promise<ColorLabel[]> {
    return await this.colorLabelRepository.find();
  }

  async findOne(id: string): Promise<ColorLabel> {
    return await checkAndReturnEntity<ColorLabel>(this.colorLabelRepository, {
      where: { id },
    });
  }

  async update(
    id: string,
    updateColorLabelDto: UpdateColorLabelDto,
  ): Promise<ColorLabel> {
    const label = await this.findOne(id);

    return await this.colorLabelRepository.save({
      ...label,
      ...updateColorLabelDto,
    });
  }

  async remove(id: string): Promise<ColorLabel> {
    const label = await this.findOne(id);

    return await this.colorLabelRepository.remove(label);
  }
}
