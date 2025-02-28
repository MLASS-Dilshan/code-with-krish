import { IsNumber, IsString } from "class-validator";

export class createProductDto {
    @IsString()
    name : string;
    @IsNumber()
    price : number;
    @IsNumber()
    quantity : number;
}