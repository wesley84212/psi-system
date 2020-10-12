import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './model/warehouse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WareHouse } from '../entity/warehouse.entity'

@Module({
  imports: [TypeOrmModule.forFeature([WareHouse])],
  controllers: [WarehouseController],
  providers: [WarehouseService],
  exports: [WarehouseService]
})
export class WarehouseModule { }
