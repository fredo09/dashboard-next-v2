import React from 'react';
import type { Metadata } from 'next';
import { WidgetGrid } from '@/components';

export const metadata: Metadata = {
  title: "Main Page",
  description: "Main Page.",
};


export default function mainPage () {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'> Informacion general</span>

      <WidgetGrid />
    </div>
  )
}