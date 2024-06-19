//createSlice: A function from @reduxjs/toolkit that helps create a slice of the Redux state along with action 
// creators and a reducer.
//nanoid:A function that generates unique IDs, which is useful for creating unique identifiers for new todo.
import {createSlice, nanoid } from '@reduxjs/toolkit';

//initialState:An object representing the initial state of the todos slice. It starts with one todo item that
//has an id of 1 and the text "Hello world".
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

//If you don't write export here before todoSlice then it is also working fine.Because we have not imported 
//todoSlice anywhere
export const todoSlice = createSlice({
//The term "todoSlice" typically refers to the entire slice object that is created using the createSlice 
//function from Redux Toolkit.
//name:'todoo' A string identifier for your slice, which is used internally by Redux Toolkit.
// The name property is used to prefix the action types that are generated for each reducer in the slice.
// This helps to ensure that action types are unique across the entire application.
//For instance,if you have an action addTodo in a slice named todoo,the resulting action type will be todoo/addTodo.    
// 1.todoo/addTodo 2.todoo/removeTodo
// You can see these (1&2)in redux developer tools after run this project and adding some todo there
// Avoiding Conflicts: Helps prevent naming conflicts in larger applications with multiple slices.
    name: 'todoo',
    initialState,
 //reducers: An object where each key is a reducer function that defines how to handle different actions.
 //Parameters:
    //  state: The current state of the todos slice.
    //  action: The action dispatched, which carries a payload.
    reducers: {
        addTodo:(state, action)=>{
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer