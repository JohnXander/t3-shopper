import Head from 'next/head'
import { useState } from 'react';
import { trpc } from '../utils/trpc';
import { ShoppingItem } from "@prisma/client";

export default function IndexPage() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const itemMutation = trpc.createItem.useMutation();

  return (
    <div>
      <Head>
        <title>T3-Shopper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='mx-auto my-12 max-w-3xl'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>My Shopping List</h2>
          <button
            type='button'
            className='bg-violet-500 text-white text-sm p-2 rounded-md transition hover:bg-violet-600'
          >
            Add shopping item
          </button>
        </div>

        <ul className='mt-4'>
          {["orange", "mango"].map((item, idx) => {
            return <li key={idx}>{item}</li>
          })}
        </ul>
      </main>

    </div>
  );
}
