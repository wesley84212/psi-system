"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
let PurchaseController = class PurchaseController {
    findAll() {
        const data = {
            id: 1,
            name: 'test',
            quantity: 10,
            purchaseDate: new Date(),
            cost: 100
        };
        return data;
    }
    findWeek(request) {
        console.log(request);
        return 'This is request test';
    }
    findQuery(params) {
        console.log(params.id);
        return 'This is test find params';
    }
    async create(createPurchase) {
        console.log(createPurchase);
        return 'This is test post api';
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", dto_1.ListPurchase)
], PurchaseController.prototype, "findAll", null);
__decorate([
    common_1.Get('week'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], PurchaseController.prototype, "findWeek", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], PurchaseController.prototype, "findQuery", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePurchase]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "create", null);
PurchaseController = __decorate([
    common_1.Controller('purchase')
], PurchaseController);
exports.PurchaseController = PurchaseController;
//# sourceMappingURL=purchase.controller.js.map