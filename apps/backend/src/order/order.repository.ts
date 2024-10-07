import { Order } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class OrderRepository {
  constructor(readonly prisma: PrismaProvider) {}

  async all(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      include: {
        items: {
          include: { product: { select: { id: true, name: true } } },
        },
        shipping: true,
      },
    });

    return orders as any;
  }

  async find(id: number): Promise<Order | null> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: { product: { select: { id: true, name: true } } },
        },
        shipping: true,
      },
    });

    return (order as any) ?? null;
  }

  async save(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: {
        date: order.date,
        status: order.status,
        total: order.total,
        paymentMethod: order.paymentMethod,
        shipping: { create: { ...order.shipping } },
        items: {
          create: order.items.map((item) => ({
            productId: item.product.id,
            unityPrice: item.unityPrice,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) return;

    await this.prisma.$transaction([
      this.prisma.orderItem.deleteMany({ where: { orderId: id } }),
      this.prisma.orderShipping.delete({ where: { id: order.shippingId } }),
      this.prisma.order.delete({ where: { id } }),
    ]);
  }
}
