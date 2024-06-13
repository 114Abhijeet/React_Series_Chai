// While creating hook make sure you are using .js extension because they don't return jsx they are js functions 
// and you should follow the standard approach for creating hook that is hook should be started from use word.

import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    //Here in parameter res is a Json string which is parsed and convert to object by res.json()
        .then((res) => res.json()) 
        .then((res) => setData(res[currency]))//here currency is key of the object 
    // When you click on swap option or either you manually change the currency type of upper half interface(From)
    // not below half interface(To),then only logs will be printed in console
        console.log(data);// data is an object
    }, [currency])
    return data
}
export default useCurrencyInfo;
