import { Injectable, NotFoundException } from '@nestjs/common';
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

    async fetchAllProducts(): Promise<inventory[]> {
        return this.inventoryRepository.find()
    }

    async fetchProductById(id: number): Promise<inventory> {
        const product = await this.inventoryRepository.findOne({where : {id}})

        if (!product) {
            throw new NotFoundException(`Product Id: ${id} not found`);
          }

        return product;
    }  
    
    async validateStock(
        id: number,
        quantity: number,
      ): Promise<{ available: boolean }> {
        const product = await this.fetchProductById(id);
        return { available: product.quantity >= quantity };
      }
}
