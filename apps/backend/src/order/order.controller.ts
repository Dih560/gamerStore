import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from '@gstore/core';

@Controller('orders')
export class OrderController {
  constructor(private readonly repository: OrderRepository) {}

  @Get()
  index(): Promise<Order[]> {
    return this.repository.all();
  }

  @Get(':id')
  show(@Param('id') id: string): Promise<Order | null> {
    return this.repository.find(+id);
  }

  @Post()
  store(@Body() order: Order): Promise<void> {
    return this.repository.save(order);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.repository.delete(+id);
  }
}
