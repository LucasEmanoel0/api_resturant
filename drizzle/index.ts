import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { productsTable } from "./src/db/products.ts";
import { tableTable } from "./src/db/table.ts";

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
export const usersCount = await db.$count(productsTable);
export const tableCount = await db.$count(tableTable);