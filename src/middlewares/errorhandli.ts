
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
    return res.status(500).json({message:error.message})
   
}