CREATE TABLE "tables" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tables_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"tableNumber" integer NOT NULL,
	"createat" timestamp DEFAULT now(),
	"update_at" timestamp DEFAULT now()
);
