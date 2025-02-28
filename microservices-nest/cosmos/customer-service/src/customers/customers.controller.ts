import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { createCutomerDto } from './dto/create-customer.dto';
import { promises } from 'dns';
import { customer } from './entity/customer.entity';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customerService : CustomersService) {}

    @Post()
    async create (@Body() createCustomerDto : createCutomerDto) : Promise<customer> {
        return await this.customerService.create(createCustomerDto);
    }

    @Get(':id')
    async fetch(@Param('id') id : number) {
        return await this.customerService.fetch(id);
    }


    @Get()
    async fetchAllCustomer() {
        return await this.customerService.fetchAllCustomer();
    }
}
