import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
// These lines create two pieces of state:username and password,both initially set to empty strings.The setUsername 
// and setPassword functions are used to update these state values as the user types into the input fields.
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

//This line uses the useContext hook to access the UserContext.Specifically, it extracts the setUser function 
// from the context. This function will be used to update the user data stored in the context.
    const {setUser} = useContext(UserContext)

//This function is called when the user submits the form. It prevents the default form submission behavior
//(which would normally refresh the page). Then, it uses the setUser function from the context to update the
//user data with the current username and password.
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login