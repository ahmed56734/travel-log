import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { locationTable } from "./location";

export const locationLogTable = sqliteTable("locationLog", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  lat: real().notNull(),
  lng: real().notNull(),
  locationId: int().notNull().references(() => locationTable.id),
  userId: int().notNull().references(() => user.id),
  createdAt: int().notNull().$defaultFn(() => Date.now()),
  updatedAt: int().notNull().$defaultFn(() => Date.now()).$onUpdateFn(() => Date.now()),
});
