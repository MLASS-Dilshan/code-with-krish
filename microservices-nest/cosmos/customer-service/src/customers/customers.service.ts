import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { customer } from './entity/customer.entity';
import { Repository } from 'typeorm';
import { createCutomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(customer)
        private readonly customerRepository : Repository<customer>
    ) {}

    async create(createCustomerDto : createCutomerDto) : Promise<customer> {

        const newCustomer = this.customerRepository.create(createCustomerDto)

        return await this.customerRepository.save(newCustomer)
    }

    async fetch(id : number) {

        const validCustomer = await this.customerRepository.findOne({
            where : {id}
        })

        console.log(validCustomer)

        if (!validCustomer) {
            throw new NotFoundException(`customer ID : ${id} not found `)
        }

        // return krnna one
        return validCustomer;


    }

    async fetchAllCustomer() {
        return await this.customerRepository.find();
    }
}
