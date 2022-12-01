import { Request, Response } from "express";
import log from "../logger";
import { Role } from "../model/role.entity";
import { RoleService } from '../service/role.service';

const service = new RoleService();
export class RoleController
{

    async getAllRoles(req: Request,res: Response) {
        try{
            return res.send(await service.getAllRoles());
        }
        catch(e){log.info(e)}
    }
    async getRole(req: Request,res: Response) {
        try{
            return res.send(await service.getRole(req.params.id as any as number));
        }
        catch(e){return e}
    }
    async postRole(req: Request,res: Response) {
        try{
            return res.send(await service.postRole(req.body as Role));
        }
        catch(e){return e}
    }
    async putRole(req: Request,res: Response) {
        try{
            return res.send(await service.putRole(req.body));
        }
        catch(e){return e}
    }
    async deleteRole(req: Request,res: Response) {
        try{
            return res.send(await service.deleteRole(req.params.id as any as number));
        }
        catch(e){return e}
    }
}