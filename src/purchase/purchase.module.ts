import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseService } from './model/purchase.service';
import { PurchaseController } from '../purchase/';
import { Purchase } from '../entity/purchase.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Purchase])],
    controllers: [PurchaseController],
    providers: [PurchaseService],
})
export class PurchaseModule { }
