import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import{
    increment, 
    decrement
} from './counterSlice';

export default function Counter() {
    const state = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <span>{state}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}
