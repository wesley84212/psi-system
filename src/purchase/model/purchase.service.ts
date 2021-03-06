import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from '../../entity/purchase.entity';
import { Repository } from 'typeorm';
import { CreatePurchase, PurchaseBase } from '../dto';

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(Purchase)
        private readonly repo: Repository<Purchase>
    ) { }

    public async findAll(): Promise<PurchaseBase[]> {
        // throw { errorCode: ApiErrorCode.UNKNOWERROR, message: ApiErrorMessage.UNKNOWERROR };
        try {
            return await this.repo.createQueryBuilder("purchase")
                .leftJoinAndSelect("purchase.product", "product")
                .orderBy("purchase.productId", "ASC")
                .getMany();
        } catch (err) {
            console.log(err)
        }
    }
    public async findOne(id: string): Promise<PurchaseBase> {
        return await this.repo.findOne(id);
    }
    public async create(data: CreatePurchase): Promise<PurchaseBase> {
        return this.repo.save(data);
    }
    public async update(id: string, data: PurchaseBase): Promise<PurchaseBase> {

        try {
            let targetPurchase = await this.repo.findOne(id);
            targetPurchase = { ...targetPurchase, ...data }
            return await this.repo.save(targetPurchase);
        } catch (err) {
            console.log(err)
        }

    }
    public async delete(id: string): Promise<PurchaseBase> {
        const targetPurchase = await this.repo.findOne(id);
        return await this.repo.remove(targetPurchase);
    }
}
