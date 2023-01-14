import {myDataSource} from '../appDataSource'
import { Order } from '../model/order.entity'
import { IOrder } from '../interface/Iorder'
import { json } from 'express';


const repository = myDataSource.getRepository("Order");
export class OrderService implements IOrder
{
     async  getAllOrders()
    {
        return repository.find()
    }
    async getOrder(orderId: number)
    {
        return repository.findOneBy({id:orderId})
    }

    async getCompanyOrder(companyId: number)
    {
        return repository.createQueryBuilder('o')
        .innerJoinAndSelect("o.company",'company')
        .innerJoinAndSelect("o.products",'products')
        .innerJoinAndSelect("o.user",'user')
        .andWhere(`company.id = ${companyId}`).getMany()
    }

     async postOrder(order: Order)
    {
        if(!order.user)
            return Promise.reject("User is missing")
        if(!order.status)
            order.status = "In progress"
        if(!order.price)
            order.price = 0;

        return repository.save(order)
    }
     async putOrder(order:Order)
    {
        return repository.save(order)
    }
    async deleteOrder(orderId: number)
    {
        return repository.delete({id:orderId})
    }
}
