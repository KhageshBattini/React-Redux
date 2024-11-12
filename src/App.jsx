import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store';
import { addFunction, subFunction } from './action';

const App = () => {

 const counter = useSelector((store) => store.counter);
 const dispatch = useDispatch();
 const handleIncrement = () =>{
  dispatch(addFunction(1));
 }
 const handleDecrement = () =>{
  dispatch(subFunction(1));
 }

  return (
    <div>
      <h1>Redux-Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App