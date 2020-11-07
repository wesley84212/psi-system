import { Controller, Get, Post, Body, Param, Req, Put, Delete } from '@nestjs/common';
import { ProductService } from './model/product.service';
import { Request } from 'express';
@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService,
    ) { }

    @Put(':id')
    async update(@Req() request: Request) {
        const productId = request.params.id;
        return this.productService.update(productId, request.body);
    }
}
