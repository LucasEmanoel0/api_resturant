
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

    async create(req:Request,res:Response,next:NextFunction){

        try {

            const bodyschema = z.object({
            tableNumber:z.number().positive()
        })
        const {tableNumber} = bodyschema.parse(req.body)
            const tables = await db.insert(tableTable).values({tableNumber}).returning()
             return res.json({message:"table created", tables})
        } catch (error) {
            next(error)
        }

    }
}