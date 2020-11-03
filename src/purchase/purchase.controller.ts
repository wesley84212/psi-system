import { Controller, Get, Post, Body, Param, Req, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreatePurchase, ListPurchase, GetId, PurchaseBase } from './dto';
import { ProductBase } from '../product/dto';
import { PurchaseService } from './model/purchase.service';
import { ProductService } from '../product/model/product.service';
import { WarehouseService } from '../warehouse/model/warehouse.service';
import { SaleService } from '../sale/model/sale.service';

@Controller('purchase')
export class PurchaseController {
    constructor(
        private purchaseService: PurchaseService,
        private productService: ProductService,
        private warehouseService: WarehouseService,
        private saleService: SaleService,
    ) { }

    async createProduct(purchaseData) {
        const productData: ProductBase = {
            name: ""
        };
        productData.name = purchaseData.name;
        return await this.productService.create(productData);
    }

    async createSale(purchaseData, product) {
        let saleData: any = {
            product: ""
        }
        saleData = { ...saleData, ...purchaseData.sales }
        saleData.product = product
        return await this.saleService.create(saleData);
    }
    async createWareHouse(purchaseData) {
        const warehouseData = purchaseData;

        return await this.warehouseService.create(warehouseData);
    }

    @Get()
    async findAll(): Promise<ListPurchase> {
        const purchases = await this.purchaseService.findAll();
        const count = purchases.length;
        let costSum = 0
        purchases.forEach((purchase) => {
            costSum += purchase.cost
        })

        const resultData = {
            costSum: costSum,
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
        const product = await this.createProduct(purchaseData);
        purchaseData.product = product
        try {
            await this.createSale(purchaseData, product);
            await this.createWareHouse(purchaseData);
        } catch (err) {
            console.log(err)
        }

        return await this.purchaseService.create(purchaseData);
    }
    @Post('batch')
    async createBatch(@Body() purchaseData: CreatePurchase[]) {
        const resultArray = []
        purchaseData.forEach(async (data: CreatePurchase) => {
            try {
                const product = await this.createProduct(data);
                data.product = product
                if (data.sales) {
                    await this.createSale(data, product);
                }
                await this.createWareHouse(data);
                const returnData = await this.purchaseService.create(data);
                resultArray.push(returnData);
            } catch (err) {
                console.log(err)
            }
        })
        return await resultArray
    }

    @Put(':id')
    async update(@Req() request: Request) {
        const purchaseId = request.params.id;
        return this.purchaseService.update(purchaseId, request.body);
    }
    @Delete(':id')
    async delete(@Req() request: Request) {
        const purchaseId = request.params.id;
        return this.purchaseService.delete(purchaseId);
    }
}
