import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTextLabelDto } from './dto/create-text-label.dto';
import { UpdateTextLabelDto } from './dto/update-text-label.dto';
import { TextLabel } from './entities/text-label.entity';
import { checkAndReturnEntity } from 'src/utils/helpers/check-and-return';

@Injectable()
export class TextLabelService {
  constructor(
    @InjectRepository(TextLabel)
    private readonly textLabelRepository: Repository<TextLabel>,
  ) {}

  async create(createTextLabelDto: CreateTextLabelDto): Promise<TextLabel> {
    const newTextLabel = this.textLabelRepository.create(createTextLabelDto);

    return await this.textLabelRepository.save(newTextLabel);
  }

  async findAll(): Promise<TextLabel[]> {
    return await this.textLabelRepository.find();
  }

  async findOne(id: string): Promise<TextLabel> {
    const label = await this.checkTextLabel(id);

    return label;
  }

  async update(
    id: string,
    updateTextLabelDto: UpdateTextLabelDto,
  ): Promise<TextLabel> {
    const label = await this.checkTextLabel(id);

    const updatedLabel = await this.textLabelRepository.save({
      ...label,
      ...updateTextLabelDto,
    });

    return updatedLabel;
  }

  async remove(id: string): Promise<TextLabel> {
    const label = await this.checkTextLabel(id);

    const removedLabel = await this.textLabelRepository.remove(label);

    return removedLabel;
  }

  private async checkTextLabel(id: string): Promise<TextLabel> {
    return await checkAndReturnEntity<TextLabel>(this.textLabelRepository, {
      where: { id },
    });
  }
}
