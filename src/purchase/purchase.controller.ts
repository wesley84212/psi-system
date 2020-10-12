import { Controller, Get, Post, Body, Param, Req, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreatePurchase, ListPurchase, GetId, PurchaseBase, UpdatePurchase } from './dto';
import { ProductBase } from '../product/dto';
import { PurchaseService } from './model/purchase.service';
import { ProductService } from '../product/model/product.service';
import { WarehouseService } from '../warehouse/model/warehouse.service';

@Controller('purchase')
export class PurchaseController {
    constructor(
        private purchaseService: PurchaseService,
        private productService: ProductService,
        private warehouseService: WarehouseService
    ) { }

    async createProduct(purchaseData) {
        const productDate: ProductBase = {
            name: ""
        };
        productDate.name = purchaseData.name;
        return await this.productService.create(productDate);
    }
    async createWareHouse(purchaseDate) {
        const warehouseDate = purchaseDate;

        return await this.warehouseService.create(warehouseDate);
    }

    @Get()
    async findAll(): Promise<ListPurchase> {
        const purchases = await this.purchaseService.findAll();
        const count = purchases.length;
        let sum = 0
        purchases.forEach((purchase) => {
            sum += purchase.cost
        })

        const resultData = {
            sum: sum,
            count: count,
            purchase: purchases
        };
        return resultData
    }
    @Get(':id')
    async findQuery(@Param() params: GetId): Promise<PurchaseBase> {
        return this.purchaseService.findOne(params.id)
    }
    @Post()
    async create(@Body() purchaseData: CreatePurchase): Promise<CreatePurchase> {
        purchaseData.purchaseDate = new Date();
        const product = await this.createProduct(purchaseData);
        purchaseData.product = product
        await this.createWareHouse(purchaseData);
        return await this.purchaseService.create(purchaseData);
    }
    @Put(':id')
    async update(@Req() request: Request) {
        console.log(request.body)
        const purchaseId = request.params.id;
        return this.purchaseService.update(purchaseId, request.body);
    }
    @Delete(':id')
    async delete(@Req() request: Request) {
        const purchaseId = request.params.id;
        return this.purchaseService.delete(purchaseId);
    }
}
