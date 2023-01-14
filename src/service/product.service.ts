import {myDataSource} from '../appDataSource'
import { Product } from '../model/product.entity'
import { Iproduct } from '../interface/Iproduct'


const repository = myDataSource.getRepository("product");
export class ProductService implements Iproduct
{
     async  getAllProducts()
    {

        return repository.find()
    }
    async getProduct(productId: number)
    {
        return repository.findOneBy({id:productId})
    }
    async postProduct(product: Product)
    {
        if(!product.name)
            return Promise.reject("Name is missing")
        if(!product.description)
            return Promise.reject("Description is missing")
        if(!product.price)
            return Promise.reject("Price is missing")
        if(!product.company)
            return Promise.reject("Company is missing")
        return repository.save(product)
    }
     async putProduct(product:Product)
    {
        if(!product.id)
            return Promise.reject("Id is missing")
        if(!product.name)
            return Promise.reject("Name is missing")
        if(!product.description)
            return Promise.reject("Description is missing")
        if(!product.price)
            return Promise.reject("Price is missing")
        if(!product.company)
            return Promise.reject("Company is missing")

        return repository.save(product)
    }
    async deleteProduct(orderId: number)
    {
        return repository.delete({id:orderId})
    }
}
