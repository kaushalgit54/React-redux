import classes from './Counter.module.css';
import {useSelector, useDispatch, connect} from 'react-redux';
// import { Component } from 'react';
import { counterActions } from '../store/counter-slice';
import { useState } from 'react';
const Counter = ()=>{
    const [input, setInput] = useState();

    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);
     //useDispatch hook dispatches an action request from the store in redux
     const dispatch = useDispatch();
    //useSelector automatically selects the supscription from the store in redux
    const changeInputHandler = (event)=>{
        setInput(event.target.value);
    }
    const incrementHandler = ()=>{
        // dispatch({type: 'increment'});
        dispatch(counterActions.increment());
    } 
    const decrementHandler = ()=>{
        // dispatch({type: 'decrement'});
        dispatch(counterActions.decrement());
    } 
    const increaseHandler = () =>{
        console.log(+input);
        
        const num = +input;
        if(input === '') num = 0;
        // dispatch({type: 'increase', amount: +input});
        dispatch(counterActions.increase(num));  //Here this value will be extracted as {type: SOME_UNIQUE_IDENTIFIER}
    }
    const toggleCounterHandler = ()=>{
        // dispatch({type: 'toggle'});
        dispatch(counterActions.toggleCounter());
    };

   return(
     <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}       
         <div>
            <button onClick={incrementHandler}>Increment</button>
            <input className={classes.inp} type="number" placeholder='Increase by....' onChange={changeInputHandler} value={input}/>
            <button onClick={increaseHandler}>Increment by x</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
     </main>
   );
};

export default Counter;

//Using Redux in class Based Components

// class Counter extends Component{
//     incrementHandler(){
//         this.props.increment();
//     }
//     decrementHandler(){
//         this.props.decrement();
//     }
//     toggleCounterHandler(){}

//     render(){
//         return(
//             <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//                 <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                 <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//          </main>
//         );
//     };
// }

// const mapStateProps = state =>{
//     return {
//        counter: state.counter
//     };
// }
// const mapDispatchProps = dispatch =>{
//     return{
//         increment: ()=>dispatch({type: 'increment'}),
//         decrement: ()=>dispatch({type: 'decrement'}),
//     }
// };
// export default connect(mapStateProps, mapDispatchProps)(Counter);
