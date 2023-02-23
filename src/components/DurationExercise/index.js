// Show the name of the exercise (text only)
// Allow a user to click on an element to start a timer.
// Allow a user to click on an element to reset (or stop) the timer.
// Must increase in value when the start button is pressed
// Must reset to a reasonable value (00:00 or 00:00:00 are acceptable)
// All buttons may be displayed, or buttons may be displayed based on state
// You must pad your digits so that single digits have a "0", e.g. 01 instead of 1. See workshop video.
// timer refernced from demo-class-components example

import { useCallback, useEffect, useState } from "react"

let currentTimer = 0
let resetTimer = 0
export default function DurationExercise ({exercise, setMenuScreen}) {
    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let updateTimer = useCallback(() => {
        if(running){
            setTimer((timer) => timer+10)
        }
    }, [running])
    useEffect(() => {
        currentTimer = setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
    }, [running, updateTimer])
    let start = useCallback(() => {
        setRunning(!running)
    }, [running])
    let reset = useCallback(() => {
        clearInterval(currentTimer)
        setTimer(resetTimer)
    })
    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0")
    let {name} = exercise 
    return (
        <div className="dur">
            <h2>{name}</h2>
            <p style={{fontSize: "3em", fontFamily:"monospace"}}>Duration: {mins}:{secs}</p>
            <button onClick={start}>Start</button>
            <br/>
            <button onClick={reset}>Reset</button>
            <br/>
            <button onClick={setMenuScreen}>Return</button>
        </div>
    )
}


// export default function DurationExercise({exercise, setMenuScreen}) {
//    let {name} = exercise 
//     return <div>
//         <p>{name}</p>
//         <DurationExercise/>
//         <button onClick={setMenuScreen}>Return</button>
//         </div>
// }