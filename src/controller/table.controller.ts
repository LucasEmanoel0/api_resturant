
import z from "zod";
import { db } from "../../drizzle/index.ts";
import { tableTable } from "../../drizzle/src/db/table.ts";
import  express  from 'express';

type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;


export default class TableController{
    async show(req:Request,res:Response,next:NextFunction){
        try {
            const tables = await db.select().from(tableTable).orderBy(tableTable.tableNumber);
            res.json({tables})
        } catch (error) {
            next(error)
        }

    }
}