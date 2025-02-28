import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { inventory } from './inventory/entity/inventory.entity';

@Module({
  imports: [InventoryModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.HOSTNAME || 'localhost',
    port: 3306,
    username: 'root',
    password: 'sachira12345',
    database: 'cosmos',
    entities: [inventory],
    synchronize: true
  })],
})
export class AppModule {}
