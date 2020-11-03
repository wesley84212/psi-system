import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Product } from '../entity/product.entity';
@Entity()
export class WareHouse {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Product)
    @JoinColumn()
    product: Product;

    @Column('int')
    quantity: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @CreateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;
}