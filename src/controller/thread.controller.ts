import { Request, Response } from "express";
import log from "../logger";
import { Worker } from "worker_threads";

export class ThreadController
{

    async nonBlocking(req: Request,res: Response) {
        try{
            return res.send('<h1>Non blocking</h1>');
        }
        catch(e){log.info(e)}
    }
    async Blocking(req: Request,res: Response) {
        try{
            const worker = new Worker("./worker.js");
            worker.on("message", (data) => {
                res.status(200).send(`<h1>${data}</h1>`);
            });
              worker.on("error", (msg) => {
                res.status(404).send(`An error occurred: ${msg}`);
            });
        }
        catch(e){log.info(e)}
    }

}