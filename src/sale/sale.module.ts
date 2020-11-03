import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './model/sale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from '../entity/sale.entiry';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  controllers: [SaleController],
  providers: [SaleService],
  exports: [SaleService]
})
export class SaleModule { }
