import React from 'react'

const UserContext = React.createContext()

export default UserContext;

// Notes
// Here a new context object is created "UserContext" by calling React.createContext(). A context in React is a
// way to pass data through the component tree without having to pass props down manually at every level.
// While creating context see carefully we have not provide any default value to it.
// It's especially useful for global data like user information, theme settings, or language preferences.
// By creating a context, providing it in a higher-level component, and consuming it in child components, you can
// avoid "prop drilling" and make your code cleaner and easier to manage.