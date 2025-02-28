import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { customer } from './entity/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([customer])],
  providers: [CustomersService],
  controllers: [CustomersController]
})
export class CustomersModule {}
