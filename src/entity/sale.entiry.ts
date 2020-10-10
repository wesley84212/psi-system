import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    itemList: string;

    @Column('int')
    saleAmount: number

    @Column('int')
    saleCharge: number

    @Column('date')
    saleDate!: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @CreateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;
}