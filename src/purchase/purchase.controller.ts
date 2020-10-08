import { Controller, Get, Post, Body, Param, Req, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreatePurchase, ListPurchase, GetId, PurchaseBase, UpdatePurchase } from './dto';
import { PurchaseService } from './model/purchase.service';

@Controller('purchase')
export class PurchaseController {
    constructor(private purchaseService: PurchaseService) { }

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
    @Get('month/:month')
    findWeek(@Req() request: Request): string {
        console.log(request.params.month);
        return 'This is request test';
    }
    @Get(':id')
    async findQuery(@Param() params: GetId): Promise<PurchaseBase> {
        return this.purchaseService.findOne(params.id)
    }
    @Post()
    async create(@Body() createPurchase: CreatePurchase): Promise<CreatePurchase> {
        createPurchase.purchaseDate = new Date();
        return this.purchaseService.create(createPurchase);
    }
    @Put(':id')
    update(@Req() request: Request) {
        console.log(request.body)
        const purchaseId = request.params.id;
        return this.purchaseService.update(purchaseId, request.body);
    }
    @Delete(':id')
    delete(@Req() request: Request) {
        const purchaseId = request.params.id;
        return this.purchaseService.delete(purchaseId);
    }
}
