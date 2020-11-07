import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from '../../entity/sale.entiry';

@Injectable()
export class SaleService {
    constructor(
        @InjectRepository(Sale)
        private readonly repo: Repository<Sale>
    ) { }

    public async findAll(): Promise<any[]> {
        return await this.repo.find({ relations: ["product"] });
    }
    public async create(input: any): Promise<Sale> {
        return this.repo.save(input);
    }

    // toDo dto file
    public async update(id: string, data: any): Promise<Sale> {
        try {
            let targetPurchase = await this.repo.findOne(id);
            targetPurchase = { ...targetPurchase, ...data }
            return await this.repo.save(targetPurchase);
        } catch (err) {
            console.log(err)
        }

    }
}
