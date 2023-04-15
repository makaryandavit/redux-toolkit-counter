import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, plusByNumber, reset } from '../counterSlice';

export const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [num,setNum] = useState(0);
  return (
    <>
        <p>{value}</p>
        <div className='btns'>
            <button onClick={() =>{
                dispatch(decrement())
            }}>-</button>
            <button onClick={() => {
                dispatch(increment())
            }}>+</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() =>{
                dispatch(plusByNumber(num))
                setNum('')
            }}>Add Value</button>
            <input type="text" maxLength={2} value={num || ''} onChange={(e) => {
                setNum(+e.target.value)
            }} placeholder='0-99' />
        </div>
    </>
    
  )
}
