import { Controller, Get} from '@nestjs/common';
import { WarehouseService } from './model/warehouse.service';
import { WareHousebase } from './dto';
@Controller('warehouse')
export class WarehouseController {
    constructor(
        private warehouseService: WarehouseService
    ) { }

    @Get()
    async findAll(): Promise<WareHousebase[]> {
        const resultData = this.warehouseService.findAll();
        return resultData
    }
}
