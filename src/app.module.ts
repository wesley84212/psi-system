import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseController } from './purchase/';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'psisystem',
      entities: ['dist/**/*.entity.js'],
      synchronize: true
    }
  )],
  controllers: [AppController, PurchaseController],
  providers: [AppService],
})
export class AppModule { }
