import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";

export const locationTable = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  lat: real().notNull(),
  lng: real().notNull(),
  userId: int().notNull().references(() => user.id),
  createdAt: int().notNull().$defaultFn(() => Date.now()),
  updatedAt: int().notNull().$defaultFn(() => Date.now()).$onUpdateFn(() => Date.now()),
});
