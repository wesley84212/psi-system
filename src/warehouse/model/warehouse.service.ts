import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WareHousebase } from '../dto';
import { Repository } from 'typeorm';
import { WareHouse } from '../../entity/warehouse.entity';
@Injectable()
export class WarehouseService {
    constructor(
        @InjectRepository(WareHouse)
        private readonly repo: Repository<WareHouse>
    ) { }

    public async create(data: WareHousebase): Promise<WareHousebase> {
        return this.repo.save(data);
    }
}
