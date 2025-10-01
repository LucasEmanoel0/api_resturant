import { Router } from "express";
import { routerproducts } from "./products.routes.ts";
import { tablerouter } from "./tables.routes.ts";
import { tablesessionrouter } from "./tablesessions.routes.ts";
import { routerorders } from "./orders.routes.ts";
const routesindex = Router()


routesindex.use("/products",routerproducts)
routesindex.use("/tables",tablerouter)
routesindex.use("/tablesessions",tablesessionrouter)
routesindex.use("/orders",routerorders)

export {routesindex}
