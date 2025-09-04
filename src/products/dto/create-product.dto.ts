import { LocalizedString, Category, MasterVariant } from '../../types/productApi';

export class CreateProductDto {
  key: string;
  name: LocalizedString;
  description: LocalizedString;
  slug: LocalizedString;
  metaTitle: LocalizedString;
  published?: boolean;
  categories: Category[];
  masterVariant: MasterVariant[];
}
