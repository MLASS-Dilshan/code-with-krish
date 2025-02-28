import { IsString } from "class-validator";

export class createCutomerDto {
    @IsString()
    name : string;
    @IsString()
    email : string;
    @IsString()
    address : string;


}