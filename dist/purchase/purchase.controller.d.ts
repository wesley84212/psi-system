import { Request } from 'express';
import { CreatePurchase, ListPurchase } from './dto';
export declare class PurchaseController {
    findAll(): ListPurchase;
    findWeek(request: Request): string;
    findQuery(params: any): string;
    create(createPurchase: CreatePurchase): Promise<string>;
}
