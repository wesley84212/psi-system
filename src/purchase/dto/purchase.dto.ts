import { IsInt, IsDate } from "class-validator";
import { Product } from '../../entity/product.entity';

interface purchase {
    name?: string;
    quantity: number;
    purchaseDate: Date;
    cost: number;
}

export class GetId {
    readonly id: string;
}

export class PurchaseBase implements purchase {
    readonly id: number;
    name?: string;
    product: Product;
    @IsInt()
    quantity: number;
    @IsDate()
    purchaseDate: Date;
    @IsInt()
    cost: number;
    @IsInt()
    status: number;
    @IsInt()
    income:number
}

export class Sale {
    @IsDate()
    saleDate?: Date;
    @IsInt()
    saleAmount?: number;
    @IsInt()
    saleCharge?: number;
    @IsInt()
    saleType?: number;
}

export class ListPurchase {
    sum?: number;
    count?: number;
    purchase: PurchaseBase[];
}

export class CreatePurchase extends PurchaseBase{
    name?: string;
    sales?: Sale;
}

export class UpdatePurchase {
    readonly id: number;
    @IsInt()
    quantity: number;
    @IsDate()
    purchaseDate: Date;
    @IsInt()
    cost: number;
}
