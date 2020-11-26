import { Controller, Get, Post, Body, Param, Req, Put, Delete } from '@nestjs/common';
import { SaleService } from '../sale/model/sale.service';
import { Request } from 'express';

@Controller('sale')
export class SaleController {
    constructor(
        private saleService: SaleService,
    ) { }

    @Get()
    async findAll(): Promise<any> {
        const sales = await this.saleService.findAll();
        const count = sales.length;
        let saleAmounts = 0
        sales.forEach((sale) => {
            saleAmounts += sale.saleAmount
        })

        const resultData = {
            saleAmount: saleAmounts,
            count: count,
            sales: sales
        };
        return resultData
    }

    @Post()
    async create(@Body() saleData: any): Promise<any> {
        try {
            return await this.saleService.create(saleData);
        } catch (err) {
            console.log(err)
        }
    }

    @Put(':id')
    async update(@Req() request: Request) {
        const saleId = request.params.id;
        return this.saleService.update(saleId, request.body);
    }
}
