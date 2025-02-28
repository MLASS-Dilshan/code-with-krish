import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { customer } from './customers/entity/customer.entity';

@Module({
  imports: [CustomersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.HOSTNAME || 'localhost',
    port: 3306,
    username: 'root',
    password: 'sachira12345',
    database: 'cosmos',
    entities: [customer],
    synchronize: true

  })],
})
export class AppModule {}
