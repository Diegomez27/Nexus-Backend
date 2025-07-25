import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:  process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
   
    ProductsModule,
    CommonModule,
    SeedModule,
    FilesModule,
    AuthModule,
    SalesModule,
  ]
})
export class AppModule {
  constructor() {
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    console.log('DB_NAME:', process.env.DB_NAME);
    console.log('DB_PORT:', process.env.DB_PORT);
    console.log('DB_USERNAME:', process.env.DB_USERNAME);
  }
}
