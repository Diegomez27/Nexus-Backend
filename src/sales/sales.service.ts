import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { SaleItem } from './entities/sale-item.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../auth/entities/user.entity';
import { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sale)
        private readonly saleRepository: Repository<Sale>,
        
        @InjectRepository(SaleItem)
        private readonly saleItemRepository: Repository<SaleItem>,
        
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        
        private readonly dataSource: DataSource,
    ) {}

    async create(createSaleDto: CreateSaleDto, user: User) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            let total = 0;
            const saleItems: SaleItem[] = [];

            // Validar stock y calcular total
            for (const item of createSaleDto.items) {
                const product = await queryRunner.manager.findOne(Product, {
                    where: { id: item.producto_id }
                });

                if (!product) {
                    throw new NotFoundException(`Producto con ID ${item.producto_id} no encontrado`);
                }

                if (!product.isActive) {
                    throw new BadRequestException(`Producto ${product.nombre} no está activo`);
                }

                if (product.stock < item.cantidad) {
                    throw new BadRequestException(`Stock insuficiente para ${product.nombre}. Stock disponible: ${product.stock}`);
                }

                const subtotal = product.precio * item.cantidad;
                total += subtotal;

                // Crear item de venta
                const saleItem = queryRunner.manager.create(SaleItem, {
                    cantidad: item.cantidad,
                    precio_unitario: product.precio,
                    subtotal: subtotal,
                    producto: product
                });
                saleItems.push(saleItem);

                // Actualizar stock
                product.stock -= item.cantidad;
                await queryRunner.manager.save(product);
            }

            // Crear venta
            const sale = queryRunner.manager.create(Sale, {
                total,
                usuario: user,
                items: saleItems
            });

            const savedSale = await queryRunner.manager.save(sale);
            await queryRunner.commitTransaction();

            return savedSale;

        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async findAll() {
        return await this.saleRepository.find({
            order: { fecha: 'DESC' }
        });
    }

    async findOne(id: string) {
        const sale = await this.saleRepository.findOne({
            where: { id }
        });

        if (!sale) {
            throw new NotFoundException(`Venta con ID ${id} no encontrada`);
        }

        return sale;
    }
}
