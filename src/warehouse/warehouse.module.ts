import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { ModelService } from './model/model.service';

@Module({
  controllers: [WarehouseController],
  providers: [ModelService]
})
export class WarehouseModule {}
