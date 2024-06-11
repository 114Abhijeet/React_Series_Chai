import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15; -- without hook you can update variable but can't propagte into UI.
  //You can write anything like boolean,number,string,object in useState argument.It returns an Array 
  // setcntr is a method resposible for updating the cntr variable.Now default value in cntr is 15
  let[counter,setcounter]=useState(15);
  const addValue=()=>{
    // If we use just below 2 lines of code then we can see in console and in UI counter value is same.
    // counter=counter+1;
    // setcounter(counter);
    // But if we used this counter value in console is one lesser than in UI
    // state changes are asynchronous that's why the value in console is not being updated immediately
     setcounter(counter+1);
    // Counter value is updating(variable updation) in console but not in the UI(user Interface updation)
     console.log("clicked",counter); 
   }

   const removeValue=()=>{
    // If we use just below 2 lines of code then we can see in console and in UI counter value is same.
    // counter=counter-1;
    // setcounter(counter);
    // But if we used this counter value in console is one greater than in UI
    // state changes are asynchronous that's why the value in console is not being updated immediately
    setcounter(counter-1);
    console.log("clicked",counter); 
   }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button> 
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App

// We initialize our state by calling useState in our function component.
// useState accepts an initial state and returns two values:-
// The current state.
// A function that updates the state.