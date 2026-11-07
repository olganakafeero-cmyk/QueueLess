import { query, mutation } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("business").collect();
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("business").first();
    if (existing) return "Already added";
    await ctx.db.insert("business", { name: "Glow Salon", category: "Hair & Beauty", location: "Kampala" });
    await ctx.db.insert("business", { name: "City Dental Clinic", category: "Health", location: "Ntinda" });
    await ctx.db.insert("business", { name: "QuickFix Garage", category: "Auto", location: "Entebbe" });
    return "Added 3 business";
  },
});