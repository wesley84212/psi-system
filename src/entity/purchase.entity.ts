import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('int')
  quantity: number;

  @Column()
  purchaseDate: Date;

  @Column('int')
  cost: number;
}