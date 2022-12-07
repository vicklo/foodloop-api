import { Request, Response } from "express";
import log from "../logger";

export class MainController
{
    async Welcome(req: Request,res: Response) {
        try{
            return res.send("<h1>Welcome to foodloop</h1>");
        }
        catch(e){log.info(e)}
    }
}