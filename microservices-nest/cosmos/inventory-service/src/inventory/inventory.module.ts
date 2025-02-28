import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { inventory } from './entity/inventory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([inventory])],
  providers: [InventoryService],
  controllers: [InventoryController]
})
export class InventoryModule {}
