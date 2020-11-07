import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entity/product.entity';
import { ProductBase } from '../dto';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly repo: Repository<Product>
    ) { }

    public async create(input: ProductBase): Promise<Product> {
        return this.repo.save(input);
    }
    public async update(id: string, data: ProductBase): Promise<Product> {
        try {
            let targetPurchase = await this.repo.findOne(id);
            targetPurchase = { ...targetPurchase, ...data }
            return await this.repo.save(targetPurchase);
        } catch (err) {
            console.log(err)
        }

    }
}
