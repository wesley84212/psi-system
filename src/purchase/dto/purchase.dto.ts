import { IsInt, IsDate } from "class-validator";

interface purchase {
    name: string;
    quantity: number;
    purchaseDate: Date;
    cost: number;
}

export class GetId {
    readonly id: string;
}

export class PurchaseBase implements purchase {
    readonly id: number;
    name: string;
    @IsInt()
    quantity: number;
    @IsDate()
    purchaseDate: Date;
    @IsInt()
    cost: number;
}

export class ListPurchase {
    sum?: number;
    count?: number;
    purchase: PurchaseBase[];
}

export class CreatePurchase {
    name: string;
    @IsInt()
    quantity: number;
    @IsDate()
    purchaseDate: Date;
    @IsInt()
    cost: number;
}

export class UpdatePurchase {
    readonly id: number;
    name: string;
    @IsInt()
    quantity: number;
    @IsDate()
    purchaseDate: Date;
    @IsInt()
    cost: number;
}
