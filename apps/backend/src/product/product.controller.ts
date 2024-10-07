import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from '@gstore/core';

@Controller('products')
export class ProductController {
  constructor(private readonly repository: ProductRepository) {}

  @Get()
  index(): Promise<Product[]> {
    return this.repository.all();
  }

  @Get(':id')
  show(@Param('id') id: string): Promise<Product | null> {
    return this.repository.find(+id);
  }

  @Post()
  store(@Body() product: Product): Promise<void> {
    return this.repository.save(product);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: Product): Promise<void> {
    return this.repository.save({
      ...product,
      id: +id,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.repository.delete(+id);
  }
}
