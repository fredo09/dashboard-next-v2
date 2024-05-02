/*
 *  creation counter slide 
 */
import { createSlice } from '@reduxjs/toolkit';

interface CounterSlice {
    count: number
}

const initialState: CounterSlice = {
    count: 5,
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}
});

export const {} = CounterSlice.actions

export default CounterSlice.reducer