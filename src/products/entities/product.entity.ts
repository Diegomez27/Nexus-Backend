import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';

@Entity({ name: 'products'})
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('float', {
        default: 0
    })
    precio: number;

    @Column('int', {
        default: 0
    })
    stock: number;

    @Column('text')
    categoria: string;

    @Column('bool', {
        default: true
    })
    isActive: boolean;

    @ManyToOne(
        () => User,
        (user) => user.product,
        { eager: true }
    )
    user: User;
}
