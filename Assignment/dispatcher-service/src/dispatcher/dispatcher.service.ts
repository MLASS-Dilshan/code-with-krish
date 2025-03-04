import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dispatcher } from './entity/dispatcher.entity';
import { Repository } from 'typeorm';
import { CreateDispatcherDto } from './dto/create-dispatcher.dto';

@Injectable()
export class DispatcherService {
    constructor(
        @InjectRepository(Dispatcher)
        private readonly dispatcherRepository: Repository<Dispatcher>
    ) {}

    async createDispatcher(
        createDispatcherDto : CreateDispatcherDto,
    ): Promise<Dispatcher>{
        const dispatcher = this.dispatcherRepository.create(createDispatcherDto)
        return this.dispatcherRepository.save(dispatcher)
    }

    async getDispatcherByCity(city : string): Promise<Dispatcher>{
        const dispatcher = await this.dispatcherRepository.findOne({where: {city}})

        if(!dispatcher) {
            throw new NotFoundException(`Dispatcher with city: ${city} not found`)
        }
        return dispatcher;
    }

    // async getAllDipsatchers(): Promise<Dispatcher[]> {
    //     return this.dispatcherRepository.find();
    //   }
}
