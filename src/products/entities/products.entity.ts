import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category, LocalizedString, MasterVariant } from '../../types/productApi';

@Entity()
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

  // Todo: create categories table to have manyToMany join to other table
  @Column()
  categories: Category[];

  // Todo: create masterVariant table to have oneToMany join to other table
  @Column()
  masterVariant: MasterVariant[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
