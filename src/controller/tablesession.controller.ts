import express from "express";
import z from "zod";
import { db } from "../../drizzle/index.ts";
import { tablesessions } from "../../drizzle/src/db/tableSessions.ts";
import { desc, eq } from "drizzle-orm";
import { AppError } from "../utils/AppError.ts";
import { tableTable } from "../../drizzle/src/db/table.ts";
type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

export class TableSessionController{
    async create(req:Request,res:Response, next:NextFunction){
       
        try {
             const bodyschema = {
            table_id: z.number().positive()
        }
        const {table_id} = z.object(bodyschema).parse(req.body)
        const result = await db.select().from(tablesessions).where(eq(tablesessions.table_id,table_id)).orderBy(desc(tablesessions.opened_at))
  .limit(1);
        console.log(result)
        if(result.length > 0 && result[0].closed_at === null){
             
             throw new AppError("There is already an open session for this table", 400)

        }else{
            const tablesession = await db.insert(tablesessions).values({
            table_id,
            opened_at: new Date()
        }).returning()
            return res.status(201).json({message:"table session created",tablesession})
        }} catch (error) {
            next(error)
        }

    
}

async show (req:Request,res:Response,next:NextFunction){
    try {
        const result  = await db.select().from(tablesessions).orderBy(desc(tablesessions.closed_at))
        res.json({result})
    } catch (error) {
        next(error)
        
    }
}

async update (req:Request,res:Response,next:NextFunction){
    try {
        const bodyschema = z.object({
            id:z.coerce.number().positive()
        })
        const closed_atschema = z.object({
            closed_at:z.coerce.date()
        })
        const {id} = bodyschema.parse(req.params)
        const{closed_at} = closed_atschema.parse(req.body)

        const result = await db.select().from(tablesessions).where(eq(tablesessions.id,id))
        if(result.length === 0){
            throw new AppError("Table session not found",404)
        }else{
            await db.update(tablesessions).set({
                closed_at
            }).where(eq(tablesessions.id,id))

            return res.json({message:"mesa encerrada"})

        }

    } catch (error) {
        next(error)
        
    }
}

}