export class FilterProductsDto {
  priceRange?: { from?: number; to?: number };
  selectedPriceRange?: number[];
  categoryId?: string;
  sortOption?: string;
  searchOption?: string;
  petType?: string[];
  limit: number = 9;
  offset: number = 0;
}
