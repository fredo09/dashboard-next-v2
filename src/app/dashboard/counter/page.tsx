import React from 'react';
import type { Metadata } from "next";
import { Counter } from '@/shopping-cart/components';


export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Encuentra tus productos en el carrito de compras.",
};

export default function CounterPage () {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span> Productos en el carrito </span>
      <Counter />
    </div>
  )
}
