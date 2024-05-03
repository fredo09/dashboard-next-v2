'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store';
import { addCounter, initialCounterState, restCounter } from '@/store/counter/CounterSlice';
import { notFound } from 'next/navigation';

interface Props {
  value?: number
}

export interface CounterResponse {
  data: Data;
}

export interface Data {
  status:  string;
  message: string;
  count:   number;
}

//* -> LLAMADA A LA API 
const getCounterApi = async(): Promise<CounterResponse> => {
  try {
    const data= await fetch('/api/counter').then(result => result.json());
    console.log("🚀 ~ getCounterApi ~ data:", data.data.count )

    return data;
  } catch(err) {
    notFound();
  }
}

export const Counter =  ({ value = 0 }: Props) => {

  //add counter reducer of store and dispatch
  const counter = useAppSelector( state => state.counter.count );
  const dispatch = useDispatch();

  //State Counter
  //const [counter, setCounter] = useState(value);

  //* -> Seteamos el value al componente 
  // useEffect(() => {
  //   dispatch(initialCounterState(value));
  // }, [dispatch, value])

  //* -> usamos un effect para setear el value del api res full 
  useEffect(() => {
    getCounterApi().then(({ data }) => dispatch(initialCounterState(data.count)));
  },[dispatch]);
  
  return (
    <>
      <span className='text-9xl'> {counter} </span>
      <div className='flex'>
          <button
            onClick={() => dispatch(restCounter())}
            className='flex item-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>
            - 1
          </button>
          <button
            onClick={() => dispatch(addCounter())}
            className='flex item-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>
            + 1
          </button>
        </div>
    </>
  )
}
