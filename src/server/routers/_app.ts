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
  
  getAllItems: procedure
    .query(async () => {
      const foundItems = await prisma.shoppingItem.findMany();
      return { foundItems }
    }),
  
  deleteItem: procedure
    .input(z.object({ id: z.string() }),)
    .mutation(async ({ input }) => {
      const deletedUser = await prisma.shoppingItem.delete({ where: { ...input } });
      return { deletedUser };
    }),
  
});

export type AppRouter = typeof appRouter;