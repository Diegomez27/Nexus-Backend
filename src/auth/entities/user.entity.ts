import { Product } from "../../products/entities/product.entity";
import { Sale } from "../../sales/entities/sale.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')    
    id: string;

    @Column('text',{
        unique: true
    })
    email: string;

    @Column('text',{
        select: false
    })
    password: string;

    @Column('text')
    fullName: string;

    @Column('bool',{
        default: true
    })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['cajero']
    })
    roles: string[]; // Roles: 'admin' o 'cajero'

    @OneToMany(
        () => Product,
        (product)=> product.user
    )
    product: Product;

    @OneToMany(
        () => Sale,
        (sale) => sale.usuario
    )
    sales: Sale[];

    @BeforeInsert()
    checkFieldsBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldBeforeUpdate(){
        this.checkFieldsBeforeInsert();
    }
}


