import { Router } from "express"
import ProductController from "../controller/products.controller.ts"
const producstcontroller = new ProductController
const routerproducts = Router()

routerproducts.get('/',producstcontroller.show)
routerproducts.get('/:id',producstcontroller.index)
routerproducts.post('/',producstcontroller.create)
routerproducts.put('/:id',producstcontroller.update)
routerproducts.delete('/:id',producstcontroller.delete)


export {routerproducts}