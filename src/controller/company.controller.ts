import { Request, Response } from "express";
import { myDataSource } from "../appDataSource";
import log from "../logger";
import { Company } from "../model/company.entity";
import { CompanyService } from '../service/company.service';

const service = new CompanyService(myDataSource.getRepository("Company"));

export class CompanyController
{
    async getAllCompanys(req: Request,res: Response) {
        try{
            return res.send(await service.getAllCompanys());
        }
        catch(e){log.info(e)}
    }
    async getCompany(req: Request,res: Response) {
        try{
            return res.send(await service.getCompany(req.params.id as any as number));
        }
        catch(e){return e}
    }
    async postCompany(req: Request,res: Response) {
        try{
            return res.send(await service.postCompany(req.body as Company));
        }
        catch(e){return e}
    }
    async putCompany(req: Request,res: Response) {
        try{
            return res.send(await service.putCompany(req.body));
        }
        catch(e){return e}
    }
    async deleteCompany(req: Request,res: Response) {
        try{
            return res.send(await service.deleteCompany(req.params.id as any as number));
        }
        catch(e){return e}
    }
}