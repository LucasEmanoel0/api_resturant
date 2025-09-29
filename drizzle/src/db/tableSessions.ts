import { integer, pgTable, timestamp } from "drizzle-orm/pg-core"
import { tableTable } from "./table.ts"



export  const tablesessions = pgTable("table_sesssions",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    table_id: integer().notNull().references(()=>tableTable.id),
    opened_at:timestamp().defaultNow(),
    closed_at:timestamp().defaultNow(),

})