import { Product } from './../../entity/product.entity';
import { IsInt, IsDate } from "class-validator";

interface productInterace {
    name: string
}

export class ProductBase implements productInterace {
    name: string;
}
