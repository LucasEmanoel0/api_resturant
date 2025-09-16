import { sql } from "drizzle-orm";
import { decimal, integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  price: decimal().notNull(),
  timestamp: timestamp().notNull().default(sql`now()`),
  updateat: timestamp().notNull().default(sql`now()`)
});
