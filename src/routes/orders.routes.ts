import { Router } from "express";
import { OrdersController } from "../controller/orders.controller.ts";
const orderscontroller = new OrdersController()

const routerorders = Router()
routerorders.post("/",orderscontroller.create)
routerorders.get("/session-table/:id",orderscontroller.index)

export {routerorders}