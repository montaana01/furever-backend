import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { Category, Response } from '../../types/productApi';

@Controller()
export class CategoriesController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('categories')
  getCategories(): Response<Category> {
    return this.productsService.getCategories();
  }
}
