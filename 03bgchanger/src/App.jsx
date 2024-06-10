import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
     <div style={{background:color}} className="w-full h-screen">
      <div className="border-black flex flex-wrap justify-evenly fixed w-full bottom-0">
      <button className="bg-red-500 p-4 rounded-xl text-white" onClick={()=>setColor('red')}>red</button>
      <button className="bg-green-500 p-4 rounded-xl text-white" onClick={()=>setColor('green')}>green</button>
      <button className="bg-black p-4 rounded-xl text-white" onClick={()=>setColor('black')}>black</button>
      <button className="bg-sky-500 p-4 rounded-xl text-white" onClick={()=>setColor('skyBlue')}>Sky-blue</button>
      </div>
     </div>
    </>
  )
}

export default App
