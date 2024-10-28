import { serial, pgTable, varchar } from "drizzle-orm/pg-core";

export const taskTable = pgTable("users", {
  id: serial("id").primaryKey(),
  task:varchar("task", { length: 50 }).notNull(),
});