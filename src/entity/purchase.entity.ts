import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Product } from '../entity/product.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Product)
  @JoinColumn()
  product: Product;

  @Column('int')
  quantity: number;

  @Column('date')
  saleDate: Date;

  @Column('int')
  saleAmount: number;

  @Column('int')
  saleCharge: number;

  @Column('date')
  purchaseDate: Date;

  @Column('int')
  cost: number;

  @Column('int')
  income: number;

  @Column('int')
  status: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @CreateDateColumn({ name: 'updated_at' })
  UpdatedAt!: Date;
}