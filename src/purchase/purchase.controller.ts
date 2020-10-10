import { Controller, Get, Post, Body, Param, Req, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreatePurchase, ListPurchase, GetId, PurchaseBase, UpdatePurchase } from './dto';
import { ProductBase } from '../product/dto';
import { PurchaseService } from './model/purchase.service';
import { ProductService } from '../product/model/product.service';

@Controller('purchase')
export class PurchaseController {
    constructor(private purchaseService: PurchaseService, private productService: ProductService) { }

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
    async create(@Body() createPurchase: CreatePurchase): Promise<CreatePurchase> {
        let createProduct: ProductBase = {
            name: ""
        };
        createPurchase.purchaseDate = new Date();
        createProduct.name = createPurchase.name;
        const product = await this.productService.create(createProduct);
        createPurchase.productId = product.id;
        console.log(product)
        return await this.purchaseService.create(createPurchase);
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
