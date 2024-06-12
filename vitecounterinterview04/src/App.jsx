import { useState } from 'react'
import './App.css'
function App() {
  const [counter, setCounter]  = useState(15)
  const addValue = () => {
  //Here the function calls will be sent in batches. So, react will see them as the same operation and perform
  //it only once. So, the counter will increase by only 1 count.
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

  //To increase it by four counts, use the callback which the setCounter accepts and increase it one by one. So,the
  //  first function will be called first, the callback will be executed and the next function call will be executed.
  // prevCounter takes the previous states.
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log(counter);
  }
  const removeValue=()=>{
  //Same explanation here also
    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)

    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1 )
    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1)
    console.log(counter);
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

