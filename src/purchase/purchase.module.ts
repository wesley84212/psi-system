import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseService } from './model/purchase.service';
import { PurchaseController } from './purchase.controller';
import { Purchase } from '../entity/purchase.entity';
import { ProductModule } from '../product/product.module';

@Module({
    imports: [TypeOrmModule.forFeature([Purchase]), ProductModule],
    controllers: [PurchaseController],
    providers: [PurchaseService],
})
export class PurchaseModule { }
