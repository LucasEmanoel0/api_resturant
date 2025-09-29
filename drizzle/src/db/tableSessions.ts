import { integer, pgTable, time, timestamp } from "drizzle-orm/pg-core"
import { tableTable } from "./table.ts"



export  const tablesessions = pgTable("table_sessions",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    table_id: integer().notNull().references(()=>tableTable.id),
    opened_at:timestamp().defaultNow(),
    closed_at:timestamp("closed_at"),

})