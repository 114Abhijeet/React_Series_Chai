import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// If App is a function in App.jsx which is exported in main.jsx.Can we not create MyApp function in main.jsx?--Yes
// If App is a function then how "<App/>" this JSX syntax is interpreted--It is interpreted as a function "App()" 
// by Bable(a bundler uses by react(also by vite))
// Also react don't understand HTML Syntax(written inside return (JSX)), it is parsed into understandable code
// (something like ReactElement because it is easier to form DOM tree).Parsing is also done by bundler.
function MyApp(){
  return (
      <div>
          <h1>Custom App | chai</h1>
      </div>
  )
}

// As we are saying at the end whatever is in MyApp is converted into something like ReactElement.Can we directly 
//use it in for rendering-- No
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

// Here createElement method is used given by react library itself to form those predefined schema.Hence now its works
const reactelement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement,
  anotherUser // when your tree forms at the end variable injection will happen
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
    </React.StrictMode>
)

    /* <MyApp/> -- this also works */
    /* MyApp(); -- this will also work as MyApp is a function but you have to remove the StrictMode */
    /* <ReactElement/> //As first letter is taken as capital i.e ReactElement --Does the problem resolve?--No */
    /* As it is not a function (i.e ReactElement() or <ReactElement/>)it is object.so we write as it is. */
    /* ReactElement -- this also not works  */
    /* As we are using our custom reactElement but React has its own set of defining properties schema */
    /* anotherElement --this will work but you have to remove the StrictMode as you are passing here in HTML Tag format */
    /* reactelement -- this will work but you have to remove the StrictMode */ 