import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @CreateDateColumn({ name: 'updated_at' })
    UpdatedAt?: Date;
}