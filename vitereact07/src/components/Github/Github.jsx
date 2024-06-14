// M-1 using useEffect and useState
// import React, { useEffect, useState } from 'react'
// function Github() {
//     const [data, setData] = useState([])
// // We want whenever our Github Component is loaded(clicking on it)then useEffect will fetch API.It has no dependency
// //Bina useEffect se bhi ho jayega kyoki iski koi dependency nhi h.But better practice to use it
//     useEffect(() => {
//      fetch('https://api.github.com/users/hiteshchoudhary')
//      .then(response => response.json())
//      .then(data => {
//         console.log(data);
//         setData(data)
//      })
//     }, [])
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} alt="Git picture" width={300} />
//     </div>
//   )
// }
// export default Github

// M-2 
// Using useLoaderData we can optimize our process(we just hover to the Github link in UI and behind the scene API 
// request has gone so that no lagging in the process)
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}
export default Github
// response.json() is something like data object and when githubInfoLoader(you can give any name)is exported it goes
//in loader (see main.jsx) and while rendering useLoaderData() functions returns Data object value and now you can
//  do some operations
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}