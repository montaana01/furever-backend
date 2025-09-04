import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { FilterProductsDto } from '../dto/filter-products.dto';
import { Response } from '../../types/productApi';
import { Products } from '../entities/products.entity';

@Controller('product-projections')
export class ProductProjectionsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('search')
  search(@Query() query: FilterProductsDto): Response<Product> {
    return this.productsService.searchProducts(query);
  }

  @Get('key=:key')
  getByKey(@Param('key') key: string): Promise<Products> {
    return this.productsService.getProductByKey(key);
  }
}
