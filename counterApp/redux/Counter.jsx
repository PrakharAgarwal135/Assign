import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    Increment: (state) => {
      state.value++;
    },
    Decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    setToZero: (state) => {
      state.value = 0;
    },
  },
});

export default counterSlice.reducer;
export const { Increment, Decrement, incrementByAmount, decrementByAmount ,setToZero} = counterSlice.actions;
