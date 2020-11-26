

import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseService } from './warehouse.service';
import { WareHouse } from '../../entity/warehouse.entity';
import { MockType, repositoryMockFactory } from '../../util/jest.fn';
import { Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm';
import { async } from 'rxjs';

describe('WarehouseService', () => {
    let service: WarehouseService;
    let repositoryMock: MockType<Repository<WareHouse>>;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [WarehouseService,
                {
                    provide: getRepositoryToken(WareHouse),
                    useFactory: repositoryMockFactory
                }
            ],
        }).compile();

        service = module.get<WarehouseService>(WarehouseService);
        repositoryMock = module.get(getRepositoryToken(WareHouse))
    });

    it('should be defined', async () => {
        const input = {
            id: 1,
            product: {
                id: 1,
                name: "Test Product Name"
            },
            quantity: 100,
            createdAt: "2020-11-25T22:23:37.708Z",
            UpdatedAt: "2020-11-25T22:23:37.708Z"
        }
        repositoryMock.save.mockReturnValue(input);
        const res = await service.create(input);
        expect(res.id).toEqual(input.id);
    });
});
