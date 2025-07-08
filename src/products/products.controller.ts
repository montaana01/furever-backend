import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../types/productApi';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Product {
    return this.productsService.getProductById(id);
  }

  @Get('categories')
  getCategories() {
    return this.productsService.getCategories();
  }

  @Get('types')
  getTypes() {
    return this.productsService.getTypes();
  }
}
