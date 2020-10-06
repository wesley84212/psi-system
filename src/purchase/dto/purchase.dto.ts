import {IsInt, IsDate} from "class-validator";

interface purchase {
    readonly name: string;
    readonly quantity: number;
    readonly purchaseDate: Date;
    readonly cost: number;
}

export class GetId {
    readonly id:number;
}

export class ListPurchase implements purchase {
    readonly id:number;
    readonly name: string;
    @IsInt()
    readonly quantity: number;
    @IsDate()
    readonly purchaseDate: Date;
    @IsInt()
    readonly cost: number;
}

export class CreatePurchase {
    readonly name: string;
    @IsInt()
    readonly quantity: number;
    @IsDate()
    readonly purchaseDate: Date;
    @IsInt()
    readonly cost: number;
}

export class UpdatePurchase {
    readonly id:number;
    readonly name: string;
    @IsInt()
    readonly quantity: number;
    @IsDate()
    readonly purchaseDate: Date;
    @IsInt()
    readonly cost: number;
}
