import { Request, Response } from "express";
import log from "../logger";
import { User } from "../model/user.entity";
import { UserService } from '../service/user.service';

const service = new UserService();
export class UserController
{

    async getAllUsers(req: Request,res: Response) {
        try{
            return res.send(await service.getAllUsers());
        }
        catch(e){log.info(e)}
    }
    async getUser(req: Request,res: Response) {
        try{
            return res.send(await service.getUser(req.params.id));
        }
        catch(e){return e}
    }
    async postUser(req: Request,res: Response) {
        try{
            return res.send(await service.postUser(req.body.data as User));
        }
        catch(e){return e}
    }
    async putUser(req: Request,res: Response) {
        try{
            return res.send(await service.putUser(req.body));
        }
        catch(e){return e}
    }
    async deleteUser(req: Request,res: Response) {
        try{
            return res.send(await service.deleteUser(req.params.id as any as number));
        }
        catch(e){return e}
    }
}