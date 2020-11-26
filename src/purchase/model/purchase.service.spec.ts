import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseService } from './purchase.service';
import { Purchase } from '../../entity/purchase.entity'
import { MockType, repositoryMockFactory } from '../../util/jest.fn';
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm';

describe('PurchaseService', () => {
    let service: PurchaseService;
    let repositoryMock: MockType<Repository<Purchase>>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PurchaseService,
                {
                    provide: getRepositoryToken(Purchase),
                    useFactory: repositoryMockFactory
                }
            ],
        }).compile();

        service = module.get<PurchaseService>(PurchaseService);
        repositoryMock = module.get(getRepositoryToken(Purchase));
    });

    it('PurchaseService test findOne', async () => {
        const product = {
            "id": 1,
            "quantity": 1,
            "purchaseDate": "2020-11-25",
            "cost": 100,
            "income": 0,
            "status": 0,
            "createdAt": "2020-11-25T22:23:37.708Z",
            "UpdatedAt": "2020-11-25T22:23:37.708Z"
        }
        repositoryMock.findOne.mockReturnValue(product);
        const res = await service.findOne("1")
        expect(res.id).toEqual(product.id);
    });
});
