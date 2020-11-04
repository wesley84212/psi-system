import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from '../../entity/purchase.entity';
import { Repository } from 'typeorm';
import { CreatePurchase, PurchaseBase } from '../dto';
import { ApiErrorCode } from '../../util/errorCode.enum';
import { ApiErrorMessage } from '../../util/errorMessage.enum';

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(Purchase)
        private readonly repo: Repository<Purchase>
    ) { }

    public async findAll(): Promise<PurchaseBase[]> {
        // throw { errorCode: ApiErrorCode.UNKNOWERROR, message: ApiErrorMessage.UNKNOWERROR };
        return await this.repo.find({ relations: ["product"] });
    }
    public async findOne(id: string): Promise<PurchaseBase> {
        return await this.repo.findOne(id);
    }
    public async create(data: CreatePurchase): Promise<PurchaseBase> {
        return this.repo.save(data);
    }
    public async update(id: string, data: PurchaseBase): Promise<PurchaseBase> {
        let targetPurchase = await this.repo.findOne(id);
        targetPurchase = { ...targetPurchase, ...data }
        return await this.repo.save(targetPurchase);
    }
    public async delete(id: string): Promise<PurchaseBase> {
        const targetPurchase = await this.repo.findOne(id);
        return await this.repo.remove(targetPurchase);
    }
}
