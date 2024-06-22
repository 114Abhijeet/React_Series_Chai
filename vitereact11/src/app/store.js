// configureStore: This is a function provided by @reduxjs/toolkit to help set up a Redux store.
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Here you use todoSlice.reducer

//todoReducer:This is the reducer function imported from the todoSlice file. The reducer handles state
//updates for the todos slice of the state.

// Using 'todoo' as the key for the state managed by todoReducer
export const storee = configureStore({
    reducer: {
        todoo: todoReducer,  // This 'todoo' key is used to structure the state
    },
});

//The key you use in the reducer configuration of configureStore determines how the slice's state is accessed 
// in your global state. This key can be anything you choose and is independent of the name property in the slice.
//However, this name property is not directly related to how you structure your state in the store.