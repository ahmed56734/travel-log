import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { locationLogTable } from "./location-log";

export const locationLogImageTable = sqliteTable("locationLogImage", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  locationLogId: int().notNull().references(() => locationLogTable.id),
  userId: int().notNull().references(() => user.id),
  createdAt: int().notNull().$defaultFn(() => Date.now()),
  updatedAt: int().notNull().$defaultFn(() => Date.now()).$onUpdateFn(() => Date.now()),
});
