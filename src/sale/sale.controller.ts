import { Controller, Get, Post, Body, Param, Req, Put, Delete } from '@nestjs/common';
import { SaleService } from '../sale/model/sale.service';

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
}
