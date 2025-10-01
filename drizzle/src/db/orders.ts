import { doublePrecision, integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { tablesessions } from "./tableSessions.ts";
import { productsTable } from "./products.ts";


export const ordertable = pgTable("orders",{
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    table_session_id:integer().notNull().references(()=>tablesessions.id),
    product_id:integer().notNull().references(()=>productsTable.id),
    quantity:integer().notNull(),
    price:doublePrecision().notNull(),
    created_at:timestamp().defaultNow(),
    update_at:timestamp().defaultNow()
})