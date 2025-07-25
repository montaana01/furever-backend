import { Injectable, NotFoundException } from '@nestjs/common';
import { Category, Product, ProductType, Response } from '../types/productApi';
import { FilterProductsDto } from './dto/filter-products.dto';
import { Products } from './entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async createProduct(createDto: CreateProductDto): Promise<Products> {
    const product = this.productsRepository.create(createDto);
    return this.productsRepository.save(product);
  }
  // Todo: remove when all entities will be created
  private products: Product[] = [];
  private categories: Category[] = [];
  private types: ProductType[] = [];

  async getProducts(): Promise<Response<Products>> {
    const limit = 10;
    const offset = 0;

    const [results, total] = await this.productsRepository.findAndCount({
      skip: offset,
      take: limit,
      order: { createdAt: 'DESC' },
    });

    return {
      limit,
      offset,
      count: results.length,
      total,
      results,
    };
  }

  getProductById(id: string): Product {
    const product: Product | undefined = this.products.find(
      (product: Product) => product.id === id,
    );
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  getProductByKey(key: string): Product {
    const product: Product | undefined = this.products.find(
      (product: Product) => product.key === key,
    );
    if (!product) throw new NotFoundException(`Product with key ${key} not found`);
    return product;
  }

  getCategories(): Response<Category> {
    return {
      limit: this.categories.length,
      offset: 0,
      count: this.categories.length,
      total: this.categories.length,
      results: this.categories,
    };
  }

  getProductTypes(): Response<ProductType> {
    return {
      limit: this.types.length,
      offset: 0,
      count: this.types.length,
      total: this.types.length,
      results: this.types,
    };
  }

  searchProducts(dto: FilterProductsDto): Response<Product> {
    return {
      limit: dto.limit,
      offset: dto.offset,
      count: 0,
      total: 0,
      results: [],
    };
  }
}
