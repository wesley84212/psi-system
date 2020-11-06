import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from "typeorm";
import "reflect-metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log']
  });
  const corsOptions = {
    origin: ['http://192.168.1.109:3006', "http://localhost:3001"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  };
  app.enableCors(corsOptions);

  await app.listen(process.env.PORT || 5000);
  console.log(`Express application is up and running on port ${process.env.PORT}`);
}
bootstrap();