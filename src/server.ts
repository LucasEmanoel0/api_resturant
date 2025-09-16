import 'dotenv/config';
import express from "express"
import { routesindex } from "./routes/index.ts"
import { errorHandli } from "./middlewares/errorhandli.ts"

const app = express()
app.use(express.json())
app.use(routesindex)
app.use(errorHandli)

app.listen(3333,()=>{
    console.log("server is running")
})
