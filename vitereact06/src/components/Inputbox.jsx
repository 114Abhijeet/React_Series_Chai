import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false, // If you write true then you can't write any number or inc-dec option not work
    currencyDisable =false, // If you write true then you can't get the option list of currency
    className = "",
}) {
   const amountInputId = useId()

    return (
  //Below commented code also works same as we are not passing any className as a props(see in App.jsx file).
  //  <div className="bg-white p-3 rounded-lg text-sm flex"> 
         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            <div className="w-1/2">
                <label htmlFor={amountInputId}className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
        // If you comment out type="number" then increment-decrement option will not be shown
                    type="number" 
                    placeholder="Amount"
                    disabled={amountDisable}
    //  In React, using the value attribute ensures that form elements like inputs and selects are controlled
    //   components, keeping their values in sync with the state for consistent and predictable behavior
                    value={amount}
 //The line onAmountChange && onAmountChange(e.target.value) is a common pattern in JavaScript and React to ensure
//that the function onAmountChange exists before calling it.For below half of UI onAmountChange is not passed 
// as a prop(see in App.jsx file) 
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
    //In the InputBox component, the onChange handler for the select element calls onCurrencyChange with the new 
    //value from e.target.value. This means that the onCurrencyChange function in the parent component(App.jsx) 
    // should indeed expect a parameter.
 //Having the parent component control the state and keeping child components stateless provides several benefits:-
 //Stateless child components are more reusable and flexible since they rely on props and focus solely on
  //rendering, while the parent component manages the logic and state.
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
    
     {/* Outer{} Braces:These braces are used in JSX to embed JavaScript expressions inside HTML-like syntax. 
    They tell React that  we're entering JavaScript mode.   */}
 {/* If we want performance in loop then we have to give key which should be unique for each entity otherwise react 
    degrade its performance */}
    {/* React uses the key prop to identify which items have changed, are added, or are removed. It's a unique 
    identifier for each option, ensuring efficient updates. */}
             {currencyOptions.map((currency) =>{
              return <option key={currency} value={currency}>
                    {currency}
                </option>
           })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

// important points of useId--
// The useId hook in React is a relatively new addition designed to generate unique IDs for elements.
// This can be particularly useful in forms and for accessibility purposes.useId generates a unique ID for
// each component instance.This is particularly useful when you need to link form elements with their labels using 
// the for (in JSX, htmlFor) attribute.By generating unique IDs automatically, useId helps avoid conflicts that 
// might arise if you manually assign IDs and accidentally reuse them across different components or instances.