import { Request, Response } from "express";
import log from "../logger";
import { Company } from "../model/company.entity";
import { CompanyService } from '../service/company.service';

export class mainController
{

    async Welcome(req: Request,res: Response) {
        try{
            return res.send("<h1>Welcome to foodloop</h1>");
        }
        catch(e){log.info(e)}
    }
}