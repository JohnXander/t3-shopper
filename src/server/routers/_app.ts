import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from '../utils/prisma';

export const appRouter = router({
  createItem: procedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      const createdItem = await prisma.shoppingItem.create({
        data: { ...input }
      });
      return { createdItem }
    }),
  
});

export type AppRouter = typeof appRouter;