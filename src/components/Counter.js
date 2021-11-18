// useMemo : child components to stop computing what it's not asked to compute 'button' similar to React.memo but for functions in a component
import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => { // not a function again, but now a value to be called as such below
        let i = 0
        while( i< 200000000 ) i++
        return counterOne % 2 === 0
    }, [counterOne]) 

    return (
        <div>
            <div>
                <button onClick = {incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span> 
            </div>
            <div>
                <button onClick = {incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
