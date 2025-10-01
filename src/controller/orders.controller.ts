
import z from "zod/v3";
import express from "express";
import { tablesessions } from "../../drizzle/src/db/tableSessions.ts";
import { eq } from "drizzle-orm";
import { db } from "../../drizzle/index.ts";
import { AppError } from "../utils/AppError.ts";
import { productsTable } from "../../drizzle/src/db/products.ts";
import { ordertable } from "../../drizzle/src/db/orders.ts";
type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;





export class OrdersController {

   async create(req:Request,res:Response,next:NextFunction){
    try {
        const bodyschema = z.object({
            table_session_id:z.number(),
            product_id:z.number(),
            quantity:z.number().positive().gt(0)
        })

        const {table_session_id,product_id,quantity} = bodyschema.parse(req.body)
        const result  = await db.select().from(tablesessions).where(eq(tablesessions.id,table_session_id)).limit(1)


        if(!result.length){
            throw new AppError("Table session not found")
        }
        if(result[0].closed_at !== null){
            throw new AppError("Table session is closed")
        }
        
        const product = await db.select().from(productsTable).where(eq(productsTable.id,product_id)).limit(1)
        if(!product.length){
            throw new AppError("Product not found")
        }
        const order = await db.insert(ordertable).values({
            table_session_id,
            product_id,
            quantity,
            price:product[0].price
        })

        res.status(201).json({order})





        res.json({product:product.length})
    } catch (error) {
        next(error)
        
    }
   }

   async index(req:Request,res:Response,next:NextFunction){
try {
    
    const bodyschema = z.object({
        id:z.number().positive().gt(0)
    })

    const {id} = bodyschema.parse({ id: Number(req.params.id) })
    const order =  await db.select().from(ordertable).where(eq(ordertable.table_session_id,id))
    const total = order[0].quantity * Number(order[0].price)

    res.status(201).json({order,total})
} catch (error) {
    next(error)
}
   }
}