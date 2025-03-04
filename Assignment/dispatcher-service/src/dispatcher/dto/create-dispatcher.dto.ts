import {Type} from 'class-transformer'
import { IsString } from 'class-validator'

export class CreateDispatcherDto {
    @IsString()
    vehicle_number : string;

    @IsString()
    city : string
}

