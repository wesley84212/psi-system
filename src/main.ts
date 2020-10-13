import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";

async function bootstrap() {
  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,

  }
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(3006);
}
bootstrap();
