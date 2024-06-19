// configureStore: This is a function provided by @reduxjs/toolkit to help set up a Redux store.
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Here you use todoSlice.reducer

//todoReducer:This is the reducer function imported from the todoSlice file. The reducer handles state
//updates for the todos slice of the state.
export const storee = configureStore({
    reducer: todoReducer
})