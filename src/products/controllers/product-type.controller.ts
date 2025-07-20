import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { ProductType, Response } from '../../types/productApi';

@Controller()
export class ProductTypesController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('product‑types')
  getProductTypes(): Response<ProductType> {
    return this.productsService.getProductTypes();
  }
}
