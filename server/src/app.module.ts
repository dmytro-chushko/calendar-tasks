import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TextLabelModule } from './modules/text-label/text-label.module';
import { TextLabel } from './modules/text-label/entities/text-label.entity';
import { ColorLabelModule } from './modules/color-label/color-label.module';
import { TaskModule } from './modules/task/task.module';
import { ColorLabel } from './modules/color-label/entities/color-label.entity';
import { Task } from './modules/task/entities/task.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.POSTGRES_NAME,
      entities: [Task, TextLabel, ColorLabel],
      synchronize: true,
    }),
    TextLabelModule,
    ColorLabelModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
