import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders/entity/order.entity';
import { OrderItem } from './orders/entity/order-item.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [OrdersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host:process.env.HOSTNAME || 'localhost',
    port: 3306,
    username: 'root',
    password: 'sachira12345',
    database: 'cosmos',
    entities: [Order, OrderItem],
    synchronize: true, 
  })],
})
export class AppModule {}