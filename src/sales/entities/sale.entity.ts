import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { SaleItem } from './sale-item.entity';

@Entity('sales')
export class Sale {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    fecha: Date;

    @Column('float')
    total: number;

    @Column('text', {
        default: 'completada'
    })
    estado: string; // 'completada', 'cancelada'

    @ManyToOne(
        () => User,
        (user) => user.sales,
        { eager: true }
    )
    usuario: User;

    @OneToMany(
        () => SaleItem,
        (saleItem) => saleItem.sale,
        { cascade: true, eager: true }
    )
    items: SaleItem[];
}
