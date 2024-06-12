import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
   {/* onClick ke under agar fun() likhoge onClick={setColor("red")}to wo return value dega kyoki tumne uske ander 
   function ko call kar diya ya to aisa likho[ onClick={setColor} ] jaisa ki humne previous inc and dec counter
    m likha tha ya agar as a function likhna h to arrow function se likhna hoga */}
          <button
          onClick={() =>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}
export default App