import { Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;
    
}
