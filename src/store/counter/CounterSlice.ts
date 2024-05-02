/*
 *  creation counter slide 
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterSlice {
    count: number,
    isReady: Boolean
}

const initialState: CounterSlice = {
    count: 5,
    isReady: false
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //* -> set counter initial
    initialCounterState(state, action: PayloadAction<number>) {
        if ( state.isReady ) return;

        state.count = action.payload;
        state.isReady = true;
    },

    //* -> add counter reducer
    addCounter(state) {
        state.count++;
    },
    //* -> substracOne counter reducer
    restCounter(state) {
        if (state.count === 0) return; 
        state.count--;
    },
    //* -> reset counter with payload and action
    resetCounter(state, action: PayloadAction<number>) {
        if (action.payload < 0) action.payload = 0

        //*  Seteamos el state con el action
        state.count = action.payload;
    }
  }
});

//* export reducers
export const { addCounter, restCounter, resetCounter, initialCounterState } = CounterSlice.actions

export default CounterSlice.reducer