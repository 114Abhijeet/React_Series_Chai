import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  // As default is set to null so at present passwordRef does not contain the reference of any entity 
  // As we are facing the problem while copying the password generated(by the copy option in UI)
  // So first we have to take reference of password UI and now syncing of password UI and copy UI is possible 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  //if you comment out value:{password} in below code your password is still generated in console(by updating 
  // length etc) but not displaying in the password UI
  // console.log(pass);
  //Reason--Without the value={password} part, the text input doesn't know what to display, so it stays 
  // empty even though the password is being generated.

//If you write password instead of setPassword in dependencies here, you can see in password UI infinite loop issue
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    // pura password copy to hogi par pata karne ke liye kisi aur jagah paste karke dekhe (only window wala code
    //  ka explanation)
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
  }, [password])

//If you use passwordGenerator() without useEffect(as below shown i.e useEffect is not used) it will give error as 
//here function call is independent of change in dependencies(length, numberAllowed, charAllowed, passwordGenerator)
//React take the control by self that when to display password generated in the password UI with the help of useEffect
  // passwordGenerator()

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} 
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
  //you can write numbers directly inside JSX in React. JSX allows you to embed expressions within curly braces {}
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
      //here in prev(argument of arrow function) previous state is there which will update whwn checkbox is hit
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
    //For label to work this id should be included
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App


// Very Important points--
// Why the Slider Still Works Without value={length} 
// 1.Browser’s Default Behavior--
// The browser(real DOM) automatically keeps track of the slider's position based on the user's interaction.So,even
// without value={length}, the slider appears to move correctly.
// 2.Displaying the Length--
// You show the length value next to the slider with <label>Length:{length}</label>, which updates every time you
// move the slider. This ensures that you see the current length, even though the slider itself isn't directly 
// controlled by the length state.
// 3.Why It's Better to Include value={length}
// Controlled vs. Uncontrolled Inputs
// Uncontrolled Input: Without value={length}, the slider’s value is managed by the browser. This is fine for 
// simple cases but can lead to inconsistencies if your component becomes more complex.
// Controlled Input: With value={length}, the slider's value is explicitly controlled by React. This ensures
// the slider always matches the length state.

// useCallback memoizes a function and only recreates it when dependencies change.
// It helps optimize performance by preventing unnecessary re-renders.