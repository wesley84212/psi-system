import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseModule } from './purchase/';
import { ProductModule } from './product/';


@Module({
  imports: [TypeOrmModule.forRoot(), PurchaseModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, PurchaseModule],
})
export class AppModule { }
