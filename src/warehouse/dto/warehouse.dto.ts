import { IsInt, IsDate } from "class-validator";
import { Product } from '../../entity/product.entity';
export class WareHousebase {
    readonly id: number;
    product: Product;
    @IsInt()
    quantity: number;
}