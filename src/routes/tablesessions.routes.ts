import {Router} from 'express'
import { TableSessionController } from '../controller/tablesession.controller.ts'

const tablesessioncontroller = new TableSessionController()

const tablesessionrouter = Router()

tablesessionrouter.post("/", tablesessioncontroller.create)
tablesessionrouter.get("/", tablesessioncontroller.show)
tablesessionrouter.put("/:id", tablesessioncontroller.update)


export {tablesessionrouter}