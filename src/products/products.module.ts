import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './controllers/products.controller';
import { ProductProjectionsController } from './controllers/product-projections.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductTypesController } from './controllers/product-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers: [
    ProductsController,
    ProductProjectionsController,
    CategoriesController,
    ProductTypesController,
  ],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
