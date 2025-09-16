import express from "express";
import { db, usersCount} from "../../drizzle/index.ts";
import { productsTable } from "../../drizzle/src/db/products.ts";

type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;


export default class ProductController{
    async index(request:Request,response:Response,next:NextFunction){
        try {
            const users = await db.select().from(productsTable);
            console.log(users)
        } catch (error) {
            
        }
    }
}