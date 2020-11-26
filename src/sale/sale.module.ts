import { Module, forwardRef } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './model/sale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from '../entity/sale.entiry';
import {PurchaseModule} from '../purchase/purchase.module';
import {ProductModule} from '../product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sale]), forwardRef(() => PurchaseModule),ProductModule],
  controllers: [SaleController],
  providers: [SaleService],
  exports: [SaleService]
})
export class SaleModule { }
