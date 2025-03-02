import { Injectable,BadRequestException,NotFoundException, HttpServer } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { OrderItem } from './entity/order-item.entity';
import { createOrderDto } from './dto/create-order.dto';
import { promises } from 'dns';
import { OrderStatus, UpdateOrderStatus } from './dto/update-order.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  private readonly customerServiceUrl = 'http://localhost:3001/customers'
  private readonly inventoryServiceUrl = 'http://localhost:3002/inventory'
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    private readonly httpservice : HttpService
  ) {}

  async create(createOrderDto: createOrderDto): Promise<Order> {
    const { customerId, items } = createOrderDto;

    // const customer = await this.http
    // .get(`http://localhost:3000/customers/${customerId}`)
    // .toPromise()

    // for (const cId of items) {
    //   try {
    //     const response = this.httpservice.get(
    //       `${this.customerServiceUrl}/${}`
    //     )
    //   } 
    //   catch {

    //   }
    // }

    // const validCustomer = false;

    // Customer validation check if customer available or not
    let validCustomer = false;

    try {
      const response$ = this.httpservice.get(`${this.customerServiceUrl}/${customerId}`)
      
      const response = await lastValueFrom(response$)

      // if the response is success valiCustomer is true
      if (response.status === 200) {
        validCustomer = true;
      } else {
        console.log('customer ID not found')
        throw new BadRequestException(`Customer ID ${customerId} not found`)
      }
    }

    catch (err) {
      throw new BadRequestException(`This customer is not wxist yet ${customerId}`)
    }


    // Checking stock availability

    for (const item of items) {
      try {
        const response$ = this.httpservice.get(
          `${this.inventoryServiceUrl}/${item.productId}/validate?quantity=${item.quantity}`,
        );
        const response = await lastValueFrom(response$);
        if (!response.data.available) {
          throw new BadRequestException(
            `Product ID : ${item.productId} is out of stock.`,
          );
        }
      } catch (err) {
        console.log(err)
      }
    }

    const order = this.orderRepository.create({
      customerId,
      status: 'PENDING',
    });
    const savedOrder = await this.orderRepository.save(order);

    const orderItems = items.map((item) =>
      this.orderItemRepository.create({
        productId: item.productId,
        price: item.price,
        quantity: item.quantity,
        order: savedOrder,
      }),
    );
    await this.orderItemRepository.save(orderItems);
    return await this.orderRepository.findOne({
      where: { id: savedOrder.id },
      relations: ['items'],
    });
  }
  async fetch(id: any) {
    return await this.orderRepository.findOne({
      where: { id },
      relations: ['items'],
    });
  }
  async fetchAll() {
    return await this.orderRepository.find({ relations: ['items'] });
  }

  async updateOrderStaus(id: number, updateStatus: UpdateOrderStatus) {
    const order = await this.orderRepository.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException(`order with id: ${id} is not found`);
    }
    if (
      order.status === OrderStatus.DELIVERED ||
      order.status === OrderStatus.CANCELLED
    ) {
      throw new BadRequestException(
        `order status cannot be changed when its delivered or cancelled`,
      );
    }
    order.status = updateStatus.status;
    return await this.orderRepository.save(order);
  }
}

