// useCallback Hook : for performance
// components under a particular PARENT components are usually re-rendered when a state changes in the PARENT component // this will lead to performance issues in bigger sites where there are 10 or more components under the parent components ---> wrapping those child components with React.memo solves the problem

// useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => { // only re-renders when an item in the dependency list has changed [Both are using the same component 'Button'], so we use useCallback for this specific case, because apart from React.memo, React's normal behaviour is to re-render the other Button component once finished, so each is re-rendered only on change
        setAge(age + 1)
    }, [age])


    const incrementSalary = useCallback(() => { // only re-renders when an item in the dependency list has changed
        setSalary(salary + 1000)
    }, [])

    return (
        <div>
            <Title />
            <Count text = "Age" count = {age} />
            <Button handleClick = {incrementAge}>Increment Age</Button>
            <Count text = "Salary" count = {salary} />
            <Button handleClick = {incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
