import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { createProductDto } from './dto/create-product.dto';
import { inventory } from './entity/inventory.entity';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService : InventoryService) {}

    @Post()
    async create (@Body() createProductDto : createProductDto) : Promise<inventory> {
        return await this.inventoryService.create(createProductDto);
    }

    @Get() 
    async getAllProducts(): Promise<inventory[]> {
        return this.inventoryService.fetchAllProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: number): Promise<inventory> {
        return this.inventoryService.fetchProductById(id);
    }

    @Get(':id/validate')
  async validateStock(
    @Param('id') id: number,
    @Query('quantity') quantity: number,
  ): Promise<{ available: boolean }> {
    return this.inventoryService.validateStock(id, quantity);
  }

}
