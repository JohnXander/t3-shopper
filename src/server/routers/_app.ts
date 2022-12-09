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
      const deletedItem = await prisma.shoppingItem.delete({ where: { ...input } });
      return { deletedItem };
    }),
  
  toggleCheck: procedure
    .input(z.object({ id: z.string(), checked: z.boolean() }))
    .mutation(async ({ input }) => {
      const {id, checked} = input
      const editedItem = await prisma.shoppingItem.update({
        where: { id },
        data: { checked: !checked }
      });
      return { editedItem }
    }),
  
});

export type AppRouter = typeof appRouter;