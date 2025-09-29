CREATE TABLE "table_sesssions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "table_sesssions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"table_id" integer NOT NULL,
	"opened_at" timestamp DEFAULT now(),
	"closed_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "table_sesssions" ADD CONSTRAINT "table_sesssions_table_id_tables_id_fk" FOREIGN KEY ("table_id") REFERENCES "public"."tables"("id") ON DELETE no action ON UPDATE no action;