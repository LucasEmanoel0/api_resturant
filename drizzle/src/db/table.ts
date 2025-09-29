
import { pgTable, integer, timestamp} from "drizzle-orm/pg-core"

const tableTable = pgTable("tables",{
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    tableNumber:integer().notNull(),
    createat:timestamp().defaultNow(),
    update_at:timestamp().defaultNow()
})

export {tableTable}