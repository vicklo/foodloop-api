import {myDataSource} from '../appDataSource'
import { Order } from '../model/order.entity'
import { IOrder } from '../interface/Iorder'


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
     async postOrder(order: Order)
    {
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
