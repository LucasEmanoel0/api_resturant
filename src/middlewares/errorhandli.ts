
import { ZodError } from "zod";
import { AppError } from "../utils/AppError.ts";
export function errorHandli(
    error: any,
    req: import("express").Request,
    res: import("express").Response,
    next: import("express").NextFunction
){

    if(error instanceof AppError){
        return res.status(error.statuscode).json({message:error.message})
    }
    if(error instanceof ZodError ){
        return res.status(400).json({message:error.message,issues:error.format})
    }
    return res.status(500).json({message:error.message})
   
}