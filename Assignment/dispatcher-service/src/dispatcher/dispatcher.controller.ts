import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DispatcherService } from './dispatcher.service';
import { Dispatcher } from './entity/dispatcher.entity';
import { CreateDispatcherDto } from './dto/create-dispatcher.dto';

@Controller('dispatcher')
export class DispatcherController {
    constructor (private readonly dispatcherService: DispatcherService) {}

    @Post()
    async createDispatcher (
        @Body() createDispatcherDto : CreateDispatcherDto,
    ): Promise<Dispatcher> {
        return this.dispatcherService.createDispatcher(createDispatcherDto)
    }

    @Get(':city')
    async getDispatcherByCity(@Param('city') city : string):Promise<Dispatcher> {
        return this.dispatcherService.getDispatcherByCity(city)
    }

//     @Get()
//   async getAllDispatchers(): Promise<Dispatcher[]> {
//     return this.dispatcherService.getAllDipsatchers();
//   }
}
