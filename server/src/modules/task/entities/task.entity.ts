import { ApiProperty } from '@nestjs/swagger';
import { ColorLabel } from 'src/modules/color-label/entities/color-label.entity';
import { TextLabel } from 'src/modules/text-label/entities/text-label.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @ApiProperty({
    description: 'Task ID',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Task description',
    example: 'To do smth with some requirements',
  })
  @Column({ default: 'New task', length: 100 })
  description: string;

  @ApiProperty({
    description: 'Order of the task in a certain list',
    example: 1,
  })
  @Column()
  order: number;

  @ApiProperty({
    description: 'Date assigned to the task',
    example: 'Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)',
  })
  @Column({ type: 'date' })
  assignedDate: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty({ example: ['Secodary', 'Primary', 'custom'] })
  @ManyToMany(() => TextLabel, textLabel => textLabel.tasks)
  @JoinTable()
  textLabels: TextLabel[];

  @ApiProperty({ example: ['#000000', '#FFFFFF'] })
  @ManyToMany(() => ColorLabel, colorLabel => colorLabel.tasks)
  @JoinTable()
  colorLabels: ColorLabel[];
}
