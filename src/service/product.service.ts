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
        return repository.save(Product)
    }
     async putProduct(product:Product)
    {
        return repository.save(product)
    }
    async deleteProduct(orderId: number)
    {
        return repository.delete({id:orderId})
    }
}
