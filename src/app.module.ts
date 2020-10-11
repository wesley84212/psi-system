import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseModule } from './purchase/';
import { ProductModule } from './product/';
import { WarehouseModule } from './warehouse/warehouse.module';


@Module({
  imports: [TypeOrmModule.forRoot(), PurchaseModule, ProductModule, WarehouseModule],
  controllers: [AppController],
  providers: [AppService, PurchaseModule],
})
export class AppModule { }
