import { Router } from "express"
import ProductController from "../controller/products.controller.ts"
const producstcontroller = new ProductController
const routerproducts = Router()

routerproducts.get('/',producstcontroller.index)

export {routerproducts}