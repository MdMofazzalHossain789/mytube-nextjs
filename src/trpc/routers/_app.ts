import { createTRPCRouter } from "@/trpc/init";
import { categoiesRouter } from "@/modules/categories/server/procedures";
export const appRouter = createTRPCRouter({
  categories: categoiesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
