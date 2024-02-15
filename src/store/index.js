// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../store/counter-slice'
import authReducer from './auth-slice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    }
    
});
// const counterReducer = (state = initialState, action)=>{
//     if(action.type === 'increment'){
//         return{ 
//             counter: state.counter+1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type == 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type==='decrement'){
//         return {
//             counter: state.counter-1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }
//    return state;
// };


// const store = createStore(counterReducer);

// counterSlice.actions.toggleCounter returns an object of this shape : {type: 'some auto-generated unique identifier'}
//Here to create dispatch actions in the Counter.js we need to export counterActions which consists of counterSlice.actions

export default store;