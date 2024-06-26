import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exception/all.exception';
import { CustomValidationPipe } from './pipe/custom-validation.pipe';

async function bootstrap() {
  const PORT = process.env.PORT || 8090;
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, { cors: true });
  const { httpAdapter } = app.get(HttpAdapterHost);

  const config = new DocumentBuilder()
    .setTitle('Calendar API')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('Nets.js PostgresSQL TypeORM')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);
  app.useGlobalFilters(new AllExceptionsFilter({ httpAdapter }));
  app.useGlobalPipes(new CustomValidationPipe());

  await app.listen(PORT, () => logger.log(`Server started on port ${PORT}`));
}
bootstrap();
