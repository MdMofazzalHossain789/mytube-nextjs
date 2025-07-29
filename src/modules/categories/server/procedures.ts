import { db } from "@/db";
import { categories } from "@/db/schema";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";

export const categoiesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const data = await db.select().from(categories);

    return data;
  }),
});
