import { ApiProperty } from '@nestjs/swagger';
import { Task } from 'src/modules/task/entities/task.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ColorLabel {
  @ApiProperty({
    description: 'Color label ID',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Color code',
    example: '#FFFDDD',
  })
  @Column()
  color: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Task, task => task.colorLabels)
  tasks: Task[];
}
