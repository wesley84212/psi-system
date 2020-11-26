import { Test, TestingModule } from '@nestjs/testing';
import { SaleService } from './sale.service';
import { Sale } from '../../entity/sale.entiry';
import { MockType, repositoryMockFactory } from '../../util/jest.fn';
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm';

describe('SaleService', () => {
    let service: SaleService;
    let repositoryMock: MockType<Repository<Sale>>;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SaleService,
                {
                    provide: getRepositoryToken(Sale),
                    useFactory: repositoryMockFactory
                }
            ],
        }).compile();

        service = module.get<SaleService>(SaleService);
        repositoryMock = module.get(getRepositoryToken(Sale))
    });

    it('should be defined', async () => {
        const input = {
            id: 1,
            product: 1,
            saleAmount: 100,
            saleCharge: 0,
            saleType: 2,
            createdAt: "2020-11-25T22:23:37.708Z",
            UpdatedAt: "2020-11-25T22:23:37.708Z"
        }
        repositoryMock.save.mockReturnValue(input);
        const res = await service.create(input);
        expect(res.id).toEqual(input.id);
    });
});
