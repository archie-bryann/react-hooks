// useReducer (complex state & action)
import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (currentState, action) => {
    switch(action.type) {
        case 'increment':
            // return {firstCounter: currentState.firstCounter + action.value}
            // doesn't take care of other elements in the object unlike below which copies the object and overwrites the value you want
            return {...currentState, firstCounter: currentState.firstCounter + action.value}
        case 'decrement':
            return {...currentState, firstCounter: currentState.firstCounter - action.value}
        case 'increment2':
            return {...currentState, secondCounter: currentState.secondCounter + action.value}
        case 'decrement2':
            return {...currentState, secondCounter: currentState.secondCounter - action.value}
        case 'reset':
            return initialState
        default: 
            return currentState
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick = {() => dispatch({type:'increment', value: 1})}>Increment</button>
            <button onClick = {() => dispatch({type:'decrement', value: 1})}>Decrement</button>
            <div>
            <button onClick = {() => dispatch({type:'increment2', value: 1})}>Increment</button>
            <button onClick = {() => dispatch({type:'decrement2', value: 1})}>Decrement</button>
            </div>
            <button onClick = {() => dispatch({type:'increment', value: 5})}>Increment 5</button>
            <button onClick = {() => dispatch({type:'decrement', value: 5})}>Decrement 5</button> 
            <button onClick = {() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
