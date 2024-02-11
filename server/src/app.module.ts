import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TextLabelModule } from './modules/text-label/text-label.module';
import { TextLabel } from './modules/text-label/entities/text-label.entity';
import { ColorLabelModule } from './modules/color-label/color-label.module';

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
      entities: [TextLabel],
      synchronize: true,
    }),
    TextLabelModule,
    ColorLabelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
