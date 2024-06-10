import { useState } from 'react'

import Chai from './chai'
import Card from './components/card.jsx';
import './App.css'

function App() {
  const [counter,setCounter]=useState(15);
 function addValue(){
  console.log(counter);
  // counter=counter+1;
  if(counter<20)
  setCounter(counter+1)
 }

 function removeValue(){
  console.log(counter);
  // counter=counter-1;
  if(counter>0)
    setCounter(counter-1);
 }
  return (
    <>
    {/* <h1>Starting with react</h1>
    <div>
      <div>Counter : {counter}</div>
      <button onClick={addValue}>add Value : {counter} </button>
      <button onClick={removeValue}>remove Value : {counter} </button>
    </div> */}

    <Card username="Manoj"/>
    <Card username="aiur"/>
    </>
  );
}

export default App
