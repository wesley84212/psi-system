import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class WareHouse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    productId: number;

    @Column('int')
    quantity: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @CreateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;
}