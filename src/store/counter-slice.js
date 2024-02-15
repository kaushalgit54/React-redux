import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};


//The use of createSlice is to avoid adding all the copies of states in each dispatch calling actions
//In createsSlice redux/toolkit we are allowed to mutate the states which were not in redux
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: initialCounterState,
//     //reducers are the group of map that this slice needs
//     reducers: {
//       //Add the methods that is being dispatched from Counter.js
//       increment(state){
//        //mutating states directly allowed in redux/toolkit
//        state.counter++;
//       },
//       decrement(state){
//        state.counter--;
//       },
//       //Using redux toolkit we can also accept action as payload and mutate states accordingly
//       increase(state, action){
//        state.counter = state.counter + action.payload;
//       },
//       toggleCounter(state){
//         state.showCounter = !state.showCounter;
//       },
//     }, 
// });
 

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;