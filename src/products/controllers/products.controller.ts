import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { Product, Response } from '../../types/productApi';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Response<Product> {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Product {
    return this.productsService.getProductById(id);
  }

  @Get('key/:key')
  getByKey(@Param('key') key: string): Product {
    return this.productsService.getProductByKey(key);
  }

  @Get('/categories')
  getCategories() {
    return this.productsService.getCategories();
  }

  @Get('/product-types')
  getProductTypes() {
    return this.productsService.getProductTypes();
  }
}
