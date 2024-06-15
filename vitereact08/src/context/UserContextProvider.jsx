import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// Notes 
//UserContextProvider:This is a functional component that will act as the context provider.
//({ children }):This is destructuring syntax for the props object.The children prop represents all the components 
// nested inside UserContextProvider(like login.jsx,profile.jsx see(App.jsx file)) in your component tree.
// The ({children}) part is a special prop in React that contains any child components that are nested inside 
// UserContextProvider when it is used(in App.jsx file)
//<UserContext.Provider value={{ user, setUser }}>: This provides the user and setUser values to any component
//that consumes this context.
// {children}: This renders any nested child components inside the UserContextProvider.
//The state(user,setUser) is indeed managed by the UserContextProvider, but the state is updated by child 
// components (like Login,Profile). 