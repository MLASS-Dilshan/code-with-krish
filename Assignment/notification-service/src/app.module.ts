import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { EmployeesController } from './employees/employees.controller';

@Module({
  imports: [NotificationsModule],
  controllers: [AppController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
