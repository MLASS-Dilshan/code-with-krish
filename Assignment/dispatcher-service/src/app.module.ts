import { Module } from '@nestjs/common';
import { DispatcherModule } from './dispatcher/dispatcher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispatcher } from './dispatcher/entity/dispatcher.entity';

@Module({
  imports: [DispatcherModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.HOSTNAME || 'localhost',
    port: 3306,
    username: 'root',
    password: 'sachira12345',
    database: 'cosmos',
    entities: [Dispatcher],
    synchronize: true,
  })],
})
export class AppModule { }
