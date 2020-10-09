import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from '../../entity/purchase.entity';
import { Repository } from 'typeorm';
import { CreatePurchase } from '../dto';

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(Purchase)
        private readonly repo: Repository<Purchase>
    ) { }

    public async findAll(): Promise<Purchase[]> {
        return await this.repo.find();
    }
    public async findOne(id: string): Promise<Purchase> {
        return await this.repo.findOne(id);
    }
    public async create(data: CreatePurchase): Promise<Purchase> {
        return this.repo.save(data);
    }
    public async update(id: string, data: Purchase): Promise<Purchase> {
        let targetPurchase = await this.repo.findOne(id);
        targetPurchase = { ...targetPurchase, ...data }
        return await this.repo.save(targetPurchase);
    }
    public async delete(id: string): Promise<Purchase> {
        const targetPurchase = await this.repo.findOne(id);
        return await this.repo.remove(targetPurchase);
    }
}
