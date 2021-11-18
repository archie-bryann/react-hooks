import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (currentState, action) => { 
    // a reducer function accepts two values and returns one value
    // action: instruction to the reducer function (increment, decrement, reset)
    switch(action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
    // dispatch allows us to execute the code with a particular action

    return (
        <div> 
            <div>Count - {count}</div>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('decrement')}>Decrement</button>
            <button onClick = {() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
