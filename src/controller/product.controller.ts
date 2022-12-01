import { Request, Response } from "express";
import log from "../logger";
import { Product } from "../model/product.entity";
import {ProductService} from '../service/product.service';

const service = new ProductService();
export class ProductController
{

    async getAllProducts(req: Request,res: Response) {
        try{
            return res.send(await service.getAllProducts());
        }
        catch(e){log.info(e)}
    }
    async getProduct(req: Request,res: Response) {
        try{
            return res.send(await service.getProduct(req.params.id as any as number));
        }
        catch(e){return e}
    }
    async postProduct(req: Request,res: Response) {
        try{
            return res.send(await service.postProduct(req.body as Product));
        }
        catch(e){return e}
    }
    async putProduct(req: Request,res: Response) {
        try{
            return res.send(await service.putProduct(req.body));
        }
        catch(e){return e}
    }
    async deleteProduct(req: Request,res: Response) {
        try{
            return res.send(await service.deleteProduct(req.params.id as any as number));
        }
        catch(e){return e}
    }
}