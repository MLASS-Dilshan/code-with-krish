import { Body, Controller, Post } from '@nestjs/common';
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
}
