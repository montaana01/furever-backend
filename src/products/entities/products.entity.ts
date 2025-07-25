import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category, LocalizedString, MasterVariant } from '../../types/productApi';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @VersionColumn({ type: 'number' })
  version: number;

  @Column({ unique: true })
  key: string;

  @Column('json')
  name: LocalizedString;

  @Column('json')
  description: LocalizedString;

  @Column('json')
  slug: LocalizedString;

  @Column('json')
  metaTitle: LocalizedString;

  @Column('boolean', { default: true })
  published: boolean;

  // Todo: to connect categories in this column need create categories table to have manyToMany join to other table
  @Column('json')
  categories: Category[];

  // Todo: need create masterVariant table as category table to have oneToMany join to other table
  @Column('json')
  masterVariant: MasterVariant[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
