import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sale } from './sale.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('sale_items')
export class SaleItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    cantidad: number;

    @Column('float')
    precio_unitario: number;

    @Column('float')
    subtotal: number;

    @ManyToOne(
        () => Sale,
        (sale) => sale.items
    )
    sale: Sale;

    @ManyToOne(
        () => Product,
        { eager: true }
    )
    producto: Product;
}
