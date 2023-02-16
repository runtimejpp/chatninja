import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { helpRequestRouter } from "./routers/helpRequest";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  helpRequest: helpRequestRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;