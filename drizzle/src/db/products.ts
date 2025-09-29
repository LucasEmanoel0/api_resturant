import { sql } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar,doublePrecision } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  price: doublePrecision().notNull(),
  timestamp: timestamp().notNull().default(sql`now()`),
  updateat: timestamp().notNull().default(sql`now()`)
});
