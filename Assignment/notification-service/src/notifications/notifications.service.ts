import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs'


@Injectable()
export class NotificationsService implements OnModuleInit{
    private readonly Kafka = new Kafka ({brokers: ["3.0.159.213:9092"]})
    private readonly producer = this.Kafka.producer()
  private readonly consumer = this.Kafka.consumer({"groupId": "sachira.inventory-service"})

  async onModuleInit() {
    await this.producer.connect()
    await this.consumer.connect()
}
}



await this.producer.send() {
    
}
