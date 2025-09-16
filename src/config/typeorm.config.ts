import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export function getTypeOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: configService.getOrThrow<string>('MYSQL_HOST'),
    port: configService.getOrThrow<number>('MYSQL_PORT'),
    username: configService.getOrThrow<string>('MYSQL_USER'),
    password: configService.getOrThrow<string>('MYSQL_PASSWORD'),
    database: configService.getOrThrow<string>('MYSQL_DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
  };
}
