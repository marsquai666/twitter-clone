import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(Number(process.env.PORT));
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Comvey API')
    .setDescription('バッグの作成や管理')
    .setVersion('1.0')
    .addTag('comvey')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableShutdownHooks();

  await app.listen(Number(process.env.PORT));
}
bootstrap();
