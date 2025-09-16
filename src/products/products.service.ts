import { Injectable, NotFoundException } from '@nestjs/common';
import { Category, Product, ProductType, Response } from '../types/productApi';
import { FilterProductsDto } from './filter-products.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private categories: Category[] = [];
  private types: ProductType[] = [];

  getProducts(): Response<Product> {
    return {
      limit: this.products.length,
      offset: 0,
      count: this.products.length,
      total: this.products.length,
      results: this.products,
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
