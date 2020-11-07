import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from "typeorm";
import "reflect-metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log']
  });
  const corsOptions = {
    origin: ['http://114.25.224.195:3000','http://192.168.1.105:3000/','http://192.168.1.109:3006', "http://localhost:3000"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  };
  app.enableCors(corsOptions);
  console.log(`Express application is up and running on port ${process.env.PORT}`);
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();