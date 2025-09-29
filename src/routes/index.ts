import { Router } from "express";
import { routerproducts } from "./products.routes.ts";
import { tablerouter } from "./tables.routes.ts";
const routesindex = Router()


routesindex.use("/products",routerproducts)
routesindex.use("/tables",tablerouter)

export {routesindex}
