import { Module, forwardRef } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './model/warehouse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WareHouse } from '../entity/warehouse.entity'
import { PurchaseModule } from '../purchase/purchase.module';

@Module({
  imports: [TypeOrmModule.forFeature([WareHouse]), forwardRef(() => PurchaseModule)],
  controllers: [WarehouseController],
  providers: [WarehouseService],
  exports: [WarehouseService]
})
export class WarehouseModule { }
