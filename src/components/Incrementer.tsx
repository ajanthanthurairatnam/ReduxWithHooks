import * as React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementBySomeValue,reset } from '../actions'

export  function Incrementer() 
{
  const counter=useSelector(state=>(state as any).counter)
  const dipatch=useDispatch();

return (
  <div>
    <h1> 
        {counter}
    </h1> 
        
    <button onClick={()=>dipatch(increment())}>
        +
    </button>

    <button onClick={()=>dipatch(incrementBySomeValue(5))}>
        5+
    </button>

    <button onClick={()=>dipatch(decrement())}>
        -
    </button>

    <button onClick={()=>dipatch(reset())}>
        R
    </button>

  </div>
)
}     