import { createContext, useContext } from "react";

// Here, we create a context called ThemeContext using the createContext function from React. We provide a 
// default value for the context which includes:
// themeMode: A string indicating the current theme, defaulting to "light".
// darkTheme: A function to switch to the dark theme (currently a placeholder function).
// lightTheme: A function to switch to the light theme (currently a placeholder function).
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

//We export the Provider component from ThemeContext and name it ThemeProvider. This component will be used 
//to wrap parts of our app where we want to provide the theme context.
//The provider is directly exported from the context and does not include state management.(In previous project
//  Context API-1)there state management is done by UserContextProvider(provider component)
export const ThemeProvider = ThemeContext.Provider

// We create and export a custom hook called useTheme that simply uses the useContext hook to access the 
// ThemeContext.This custom hook makes it easier to consume the theme context in our components(like ThemeBtn.jsx)
export default function useTheme(){
    return useContext(ThemeContext)
}