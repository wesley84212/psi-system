import { Repository } from 'typeorm';
export type MockType<T> = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [P in keyof T]: jest.Mock<{}, any>;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
    save: jest.fn(entity => entity),
    findOne: jest.fn(entity => entity),
    remove: jest.fn(entity => entity),
    createQueryBuilder: jest.fn(() => ({
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        take: jest.fn().mockReturnThis(),
        skip: jest.fn().mockReturnThis(),
        getMany: jest.fn(),
    })),
    // createQueryBuilder: jest.fn(() => ({
    //     offset: jest.fn().mockReturnThis(),
    //     take: jest.fn().mockReturnThis(),
    //     orderBy: jest.fn().mockReturnThis(),
    //     skip: jest.fn().mockReturnThis(),
    //     limit: jest.fn().mockReturnThis(),
    //     from: jest.fn().mockReturnThis(),
    //     addFrom: jest.fn().mockReturnThis(),
    //     where: jest.fn().mockReturnThis(),
    //     andWhere: jest.fn().mockReturnThis(),
    //     innerJoinAndSelect: jest.fn().mockReturnThis(),
    //     leftJoinAndSelect: jest.fn().mockReturnThis(),
    //     getManyAndCount: jest.fn(),
    //     getMany: jest.fn(),
    //     getOne: jest.fn(),
    //     delete: jest.fn().mockReturnThis(),
    //     execute: jest.fn().mockReturnThis()
    // })),
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockReturnThis()
}));