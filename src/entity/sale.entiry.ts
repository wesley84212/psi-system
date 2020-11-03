import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Product } from '../entity/product.entity';
@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Product)
    @JoinColumn()
    product: Product;

    @Column('int')
    saleAmount: number

    @Column('int')
    saleCharge: number

    @Column('date')
    saleDate!: Date;

    @Column('int')
    saleType: number
    //0 匯款
    //1 賣貨便
    //2 好賣家
    //3 蝦皮

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @CreateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;
}