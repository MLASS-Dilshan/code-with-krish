import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
    public greeting(): String {
        const message = "hello from employee"
        return message;
    }
}
