import { Router } from "express"; 
import TableController from "../controller/table.controller.ts";
const tablecontroller = new TableController()
const tablerouter = Router()

tablerouter.get("/",tablecontroller.show)
tablerouter.post("/",tablecontroller.create)

export {tablerouter}