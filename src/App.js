// code refernced from lab5 solution

import './App.css'; 
import { React, useCallback, useState} from 'react'
import RepetitionExercise from './components/RepetitionExercis';
import DurationExercise from './components/DurationExercise';
import RunningExercise from './components/RunningExercise';
import RepititionExercise from './components/RepetitionExercis';

const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURRATION_EXERCISE = "duration"
const REPITITION_EXERCISE = "repitition"
const RUNNING_EXERCISE = "running"

// function DurationExercise({exercise, setMenuScreen}) {
//     return <div>
//         <p>{exercise.name}</p>
//         <DurationExercise/>
//         <button onClick={setMenuScreen}>Return</button>
//         </div>
// }

// function RepititionExercise({exercise, setMenuScreen}) {
//     let [count, setCount] = useState(0)
//     return <div>
//         <p>{exercise.name}</p>
//         <p style={{fontSize: "3em"}}></p>
//         <RepititionExercise/>
//         <button onClick={()=> setCount(count=>count+1)}>Add</button>
//         <button onClick={()=> setCount(0)}>Reset</button>
//         <button onClick={{setMenuScreen}}>Return</button>
//     </div>
//     console.log(count)
// } 
// let lappedTimes = []
// function lap() {
//   let [lapper, setLapper] = useState("")
//   let updateLapper = useCallback(() => {
//         if(!running){
//             setLapper((lapper) => lapper=time)
//         }
//     }, [running])
//     lappedTimes.push(updateLapper)
//     return <div>
//       {lappedTimes}
//     </div>
// }

// function RunningExercise({exercise, setMenuScreen}) {
//   console.log("Running")
//   return <div>
//     <p>{exercise.name}</p>
//     <RExercise/>
//     <br/>
//     <button onClick={lap}>Lap</button>
//     <br/>
//     <button onClick={{setMenuScreen}}>Return</button>
//   </div>
// }

let exerciseList = [
    {type: RUNNING_EXERCISE, name: "Running"},
    {type: DURRATION_EXERCISE, name: "Rowing"},
    {type: DURRATION_EXERCISE, name: "Swimming"},
    {type: REPITITION_EXERCISE, name: "Push Ups"},
    {type: REPITITION_EXERCISE, name: "Squats"},
    {type: REPITITION_EXERCISE, name: "Crunches"}

]

export default function App() {
    let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
    let [currentExercise, setCurrentExercise] = useState({})
    let screenComponent = undefined
    let buttonClick = useCallback ((exercise)=> {
      setCurrentExercise(exercise)
      setCurrentScreen(EXERCISE_SCREEN)
    })
    if (currentScreen === MENU_SCREEN) {
        screenComponent = <div>
            <h2>Exercise Menu</h2>
            <ul style={{listStyleType: "none"}}>   
                {exerciseList.map((exercise, index) => {
                return <li key={index}>
                    <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
                </li>
                })}
            </ul>
        </div>
    } else if (currentScreen === EXERCISE_SCREEN) {
        switch (currentExercise.type) {
            case DURRATION_EXERCISE: 
                screenComponent = <DurationExercise
                setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)} 
                exercise={currentExercise}/> 
        break;
        case REPITITION_EXERCISE:
            screenComponent = <RepititionExercise 
            setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)} 
            exercise={currentExercise}/>
        break;
        case RUNNING_EXERCISE:
            screenComponent = <RunningExercise 
            setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)} 
            exercise={currentExercise}/>
        break;
        default:
            screenComponent = undefined
        }
    } 
    return (
        <div className="App">
            <header className="App-header">
                {screenComponent}
            </header>
        </div>
    );
}