import { Injectable, BadRequestException, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { User } from '../auth/entities/user.entity';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  async create(createProductDto: CreateProductDto, user: User) {
    try {
      const product = this.productRepository.create({
        ...createProductDto,
        user,
      });

      await this.productRepository.save(product);
      return product;

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.productRepository.find({
      where: { isActive: true }
    });
  }

  async findAllPaginated(paginationDto: PaginationDto = {}) {
    const { limit = 10, offset = 0 } = paginationDto;

    const products = await this.productRepository.find({
      take: limit,
      skip: offset,
      where: { isActive: true }
    });

    return products;
  }

  async findOne(term: string) {
    let product: Product;

    product = await this.productRepository.findOne({
      where: { id: term }
    });

    if (!product) {
      throw new NotFoundException(`Producto con ID ${term} no encontrado`);
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto, user: User) {
    const product = await this.productRepository.preload({
      id: id,
      ...updateProductDto,
    });

    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    try {
      await this.productRepository.save(product);
      return product;

    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    product.isActive = false;
    await this.productRepository.save(product);
    return { message: 'Producto eliminado exitosamente' };
  }

  async deleteAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');
    try {
      return await query
        .delete()
        .where({})
        .execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    this.logger.error(error);
    throw new InternalServerErrorException('Error inesperado, revisar logs del servidor');
  }
}
