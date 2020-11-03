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
}
