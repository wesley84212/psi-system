import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import { createConnection } from "typeorm";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin:['http://192.168.1.109:3006', "http://localhost:3006"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
