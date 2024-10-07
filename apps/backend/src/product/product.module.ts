import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DbModule } from 'src/db/db.module';
import { ProductRepository } from './product.repository';

@Module({
  imports: [DbModule],
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
