import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { Product } from '../../entity/product.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from '../../util/jest.fn';

describe('ProductService', () => {
    let service: ProductService;
    let repositoryMock: MockType<Repository<Product>>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProductService,
                {
                    provide: getRepositoryToken(Product),
                    useFactory: repositoryMockFactory
                }
            ],
        }).compile();

        service = module.get<ProductService>(ProductService);
        repositoryMock = module.get(getRepositoryToken(Product));
    });

    it('should be defined', async () => {
        const input = {
            name: "Test Product Name"
        }
        const mockRes = await repositoryMock.save(input);
        const res = await service.create(input);
        expect(res).toEqual(mockRes);
    });
});
