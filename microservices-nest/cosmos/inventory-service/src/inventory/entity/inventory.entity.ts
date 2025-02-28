import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class inventory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    quantity: number;
}