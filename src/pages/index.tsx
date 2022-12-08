import Head from 'next/head'
import { useState } from 'react';
import ItemModal from '../components/ItemModal';
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const [items, setItems] = useState<String[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const itemMutation = trpc.createItem.useMutation();
  
  const addItemToList = (item: string) => {
    itemMutation.mutate({ name: item });
    setItems((prev) => [...prev, item]);
    setModalOpen(true)
  }

  return (
    <div>
      <Head>
        <title>T3-Shopper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {modalOpen && <ItemModal setModalOpen={setModalOpen} />}
      
      <main className='mx-auto my-12 max-w-3xl'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>My Shopping List</h2>
          <button
            type='button'
            className='bg-violet-500 text-white text-sm p-2 rounded-md transition hover:bg-violet-600'
            onClick={() => addItemToList("oranges")}>
            Add shopping item
          </button>
        </div>

        <ul className='mt-4'>
          {items.map((item, idx) => {
            return (
              <li
                key={idx}
                className="flex justify-between items-center">
                <span>{item}</span>
              </li>
            )
          })}
        </ul>
      </main>

    </div>
  );
}
