import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  businesses: defineTable({
    name: v.string(),
    category: v.string(),
    location: v.string(),
  }),
});