import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  productId: number;

  @Column('int')
  quantity: number;

  @Column('datetime2')
  purchaseDate: Date;

  @Column('int')
  cost: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @CreateDateColumn({ name: 'updated_at' })
  UpdatedAt!: Date;
}