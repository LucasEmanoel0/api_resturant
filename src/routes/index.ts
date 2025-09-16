import { Router } from "express";
import { routerproducts } from "./products.routes.ts";
const routesindex = Router()


routesindex.use("/products",routerproducts)

export {routesindex}
