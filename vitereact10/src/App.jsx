import { useState, useEffect } from 'react'
// Curly braces { } are used when you are importing named exports from a module. You specify exactly which parts of
// the module you want to import.
// No curly braces are used when you are importing the default export from a module. The module can only have one
// default export.
import {TodoProvider} from './contexts'
import './App.css'
// Another Way--import {TodoForm}from './components'
import TodoForm from './components/TodoForm'
// Another way--import {TodoItem} from './components'
import TodoItem from './components/TodoItem'

function App() {
  //the todos in the component's state (managed by useState) is the same todos that is passed in the value
  //prop of the TodoProvider
  //The reason why todos might be null or empty after the first render, despite having a default value in your 
  // context, is related to how the context value is managed and provided in your application.
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
  //The filter method creates a new array with all elements that pass the test implemented by the provided 
  // function setTodos is called with this new array,updating the state
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const fetchtodos = JSON.parse(localStorage.getItem("todokey"))
    if (fetchtodos && fetchtodos.length > 0) {
      setTodos(fetchtodos)
    }
  }, [])

  useEffect(() => {
  //Original todos is there in arguments and dependency
    localStorage.setItem("todokey", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
       {/* Either you use () so that you have not worried about return statement or you use {} but you have to take 
          care of return statement */}
      {/* It loops through the todos array.Each todoobject is passed to a TodoItem component as a prop named todoobj.
          The TodoItem component is then responsible for rendering the details of each todo item */}
                        {todos.map((todoobject) => (
                          <div key={todoobject.id}
                          className='w-full'
                          >
                            <TodoItem todoobj={todoobject} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

// Notes 
 //Component mounting in React involves initializing, rendering, and inserting components into the DOM.useEffect 
//with an empty dependency array ([]) ensures tasks run once when the component mounts, such as fetching data,
// initializing state, or setting up subscriptions, contributing to efficient and predictable application behavior.
//Re-rendering: When the component updates due to state or props changes.
//Component Mounting: Each time the page is refreshed, all components are mounted again, and their useEffect 
// hooks with empty dependency arrays run again.
//With useEffect:
// First Load: useEffect fetches todos from localStorage and sets the state. User sees previously saved todos.
// User Adds Todo: New todo is added, and state is updated. State reflects the new todo, and it's also saved to 
//localStorage.
//Page Reload: useEffect runs again, fetches the updated todos from localStorage, and sets the state. 
// User sees their latest todos.

// Without useEffect syntax of get todos from Local Storage:-
// First Load: State starts with an empty array (or the default value), regardless of any todos saved in 
// localStorage.
// User Adds Todo: New todo is added, and state is updated. State reflects the new todo, and it's also saved 
// to localStorage.
// Page Reload: State resets to an empty array (or the default value) since no data is fetched from localStorage.
//  User does not see any previously saved todos.

// // Directly reading from localStorage
//const fetchtodos = JSON.parse(localStorage.getItem("todokey"))
// if (fetchtodos && fetchtodos.length > 0) {
//   setTodos(fetchtodos)
// }

// Why This Causes an Infinite Loop
// Component Render:-
// The component renders for the first time.
// The fetchtodos variable is assigned the value from localStorage.

// State Update:-
// The setTodos(fetchtodos) line updates the todos state.
// When the state is updated, React triggers a re-render of the component.

// Re-render:-
// During the re-render, the component body is executed again.
// The fetchtodos variable is again assigned the value from localStorage.
// The setTodos(fetchtodos) line is executed again, updating the state and triggering another re-render.