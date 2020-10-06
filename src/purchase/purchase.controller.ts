import { Controller, Get, Req, Post, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { CreatePurchase, ListPurchase ,GetId} from './dto';

@Controller('purchase')
export class PurchaseController {
    @Get()
    findAll(): ListPurchase {
        const data = {
            id: 1,
            name: 'test',
            quantity: 10,
            purchaseDate: new Date(),
            cost: 100
        }
        return data;
    }
    @Get('week')
    findWeek(@Req() request: Request): string {
        console.log(request);
        return 'This is request test';
    }
    @Get(':id')
    findQuery(@Param() params: GetId): string {
        console.log(params.id);
        return 'This is test find params';
    }
    @Post()
    async create(@Body() createPurchase: CreatePurchase) {
        console.log(createPurchase);
        return 'This is test post api';
    }
}
