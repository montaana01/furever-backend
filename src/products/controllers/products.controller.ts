import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { Product, Response } from '../../types/productApi';
import { Products } from '../entities/products.entity';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createDto: CreateProductDto): Promise<Products> {
    return this.productsService.createProduct(createDto);
  }

  @Get()
  getProducts(): Promise<Response<Products>> {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Promise<Products> {
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
