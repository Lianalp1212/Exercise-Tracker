// Show the name of the exercise (text only)
// Allow a user to click on an element to increase a counter of repetitions, laps, or another measurement.
// Allow a user to click on an element to reset the value of the counter
// Maintain an internal counter and include a button that increments the current value.
// Start at 0
// refernce counter from demo-class-components example

import { useState } from 'react'

export default function RepititionExercise({exercise, setMenuScreen}) {
    let [count, setCount] = useState(0)
    
    function add(count, setcount) {
        setCount(count=>count+1)
    }

    //console.log(count)
    return <div>
        <h2>{exercise.name}</h2>
        <p style={{fontSize: "3em"}}>{count}</p>
        <button onClick={()=>setCount(count=>count+1)}>Add</button>
        <br/>
        <button onClick={()=>setCount(0)}>Reset</button>
        <br/>
        <button onClick={()=>setMenuScreen()}>Return</button>
    </div>
    console.log(count)
}