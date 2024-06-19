import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {storee} from './app/store'

{/* <Provider store={storee}> :Wraps your <App /> component with the Provider component from react-redux. This 
makes the Redux store (storee) available to all components in your application. */}
// You can see here we have removed the strictmode
//In our previous project this Provider like wrapper is there in App.jsx file but you can use here also
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storee}>
    <App />
  </Provider>,
)