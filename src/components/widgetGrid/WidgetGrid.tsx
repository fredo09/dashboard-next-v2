'use client';

import React from 'react'
import { SimpleWidget } from '../simpleWidget/SimpleWidget';
import { useAppSelector } from '@/store';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

export const WidgetGrid = () => {

    const counter = useAppSelector( state => state.counter.count );

    return (
        <div className='flex flex-wrap p-2 items-center justify-between'>
            <SimpleWidget 
                tittle='Carrito'
                counter={`${ counter }`} 
                icon={ <MdOutlineAddShoppingCart size={45} className='text-blue-500' />}
                subTitle='Productos agregados'
                href='/dashboard/counter'/>
            {/* <SimpleWidget /> */}
        </div>
    )
}
