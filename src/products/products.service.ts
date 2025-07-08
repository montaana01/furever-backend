import { Injectable, NotFoundException } from '@nestjs/common';
import { AttributeName, Product } from '../types/productApi';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: '1-1-1',
      version: 1,
      name: { 'en-GB': 'Product-1' },
      description: { 'en-GB': 'Product-1' },
      slug: { 'en-GB': 'Product-1' },
      metaTitle: { 'en-GB': 'Product-1' },
      masterVariant: {
        id: 1,
        sku: 'sku-product-1',
        key: 'key-product-1',
        images: [
          {
            url: 'https://images.yakovlevdev.com/cv/2025/furever.webp',
            label: 'Product-1',
            dimensions: { h: 200, w: 200 },
          }
        ],
        prices: [
          {
            id: 'price-id-1',
            key: 'price-key-1',
            value: {
              centAmount: 40000,
              currencyCode: 'EUR',
              fractionDigits: 2,
              type: 'price',
            }
          }
        ],
        attributes: [
          {
            name: AttributeName.Color,
            value: {
              key: 'color-cheap',
              label: 'color-cheap'
            },
          },
        ],
      },
      hasStagedChanges: false,
      published: true,
      key: 'key-1',
    },
    {
      id: '2-2-2',
      version: 2,
      name: { 'en-GB': 'Product-2' },
      description: { 'en-GB': 'Product-2' },
      slug: { 'en-GB': 'Product-1' },
      metaTitle: { 'en-GB': 'Product-2' },
      masterVariant: {
        id: 2,
        sku: 'sku-product-2',
        key: 'key-product-2',
        images: [
          {
            url: 'https://images.yakovlevdev.com/cv/2025/furever.webp',
            label: 'Product-2',
            dimensions: { h: 200, w: 200 },
          }
        ],
        prices: [
          {
            id: 'price-id-2',
            key: 'price-key-2',
            value: {
              centAmount: 80000,
              currencyCode: 'EUR',
              fractionDigits: 2,
              type: 'price',
            }
          }
        ],
        attributes: [
          {
            name: AttributeName.Color,
            value: {
              key: 'color-cheap',
              label: 'color-cheap'
            },
          },
        ],
      },
      hasStagedChanges: false,
      published: true,
      key: 'key-2',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  getCategories():{ data: string }  {
    return { data: 'categories' };
  }

  getTypes(): { data: string } {
    return { data: 'types' };
  }
}
