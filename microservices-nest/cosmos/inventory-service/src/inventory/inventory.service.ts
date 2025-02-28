import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { inventory } from './entity/inventory.entity';
import { Repository } from 'typeorm';
import { createProductDto } from './dto/create-product.dto';

@Injectable()
export class InventoryService {
    constructor(
        @InjectRepository(inventory)
        private readonly inventoryRepository : Repository<inventory>
    ) {}

    async create(createProductDto : createProductDto) : Promise<inventory> {

        const newProduct = this.inventoryRepository.create(createProductDto)

        return await this.inventoryRepository.save(newProduct)
    }
}
