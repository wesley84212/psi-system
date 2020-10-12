import { IsInt, IsDate } from "class-validator";

export class WareHousebase {
    readonly id: number;
    @IsInt()
    productId: number;
    @IsInt()
    quantity: number;
}