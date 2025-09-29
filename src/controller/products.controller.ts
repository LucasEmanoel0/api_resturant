import express from "express";
import { db} from "../../drizzle/index.ts";
import { productsTable } from "../../drizzle/src/db/products.ts";
import * as z from "zod"; 
import { asc, eq} from "drizzle-orm";

 


type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;


export default class ProductController{
    
    async show(request:Request,response:Response,next:NextFunction){
        try {
            const users = await db.select().from(productsTable).orderBy(asc(productsTable.name));
            response.json({users})
        } catch (error) {
            next(error)
            
        }
       
    }

    async index(request:Request,response:Response,next:NextFunction){
        try {
            const Validid = z.string().parse(request.params.id)

            const user = await db.select().from(productsTable).where(eq(productsTable.id,Number(Validid)))
            response.json({user})
            
        } catch (error) {
            next(error)
            
        }
    }

    async create(request:Request,response:Response,next:NextFunction){
        const productsschema  = z.object({
            name:z.string("string is required").trim(),
            price:z.number("number is required").positive().gt(0)
        })

        const {name,price} = productsschema.parse(request.body)
        try {
            const users = await db.insert(productsTable).values({name:name,price:price}).returning();
            response.json({users})
        } catch (error) {
            next(error)
            
        }
       
    }

    async update(request:Request,response:Response,next:NextFunction){
        

        try {
            const id  = z.string().transform(Number).parse(request.params.id)
            const productsschema  = z.object({
            name:z.string("number is required").trim(),
            price:z.number("number is required").positive().gt(0)
        })

        const {name,price} = productsschema.parse(request.body)
        const user  = await db.update(productsTable)
  .set({ name: name,price:price, updateat: new Date() })
  .where(eq(productsTable.id, id));

  return response.json({message:"product updated",user});
            
        } catch (error) {
            next(error)
        }


}
  async delete(request:Request,response:Response,next:NextFunction){
    try {
        const id = z.string().transform(Number).parse(request.params.id)

        const user = await db.delete(productsTable).where(eq(productsTable.id,id)).returning()
        return response.json({message:"product deleted",user})
    } catch (error) {
        next(error)
    }


  }
}