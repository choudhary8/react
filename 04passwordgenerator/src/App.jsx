import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumberAllowed,setIsNumberAllowed]=useState(false);
  const [isCharactersAllowed,setIsCharactersAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordRef=useRef(password);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumberAllowed)str+="1234567890";
    if(isCharactersAllowed)str+="!@#$%^&*-_+=[]{}~`";
    for(let index=1;index<=length;index++)
      {
        let charIndex=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(charIndex);
      }
      setPassword(pass);
  },[length,isCharactersAllowed,isNumberAllowed])

  useEffect(()=>{
    passwordGenerator();
  },[length,isCharactersAllowed,isNumberAllowed,passwordGenerator])

  const copyToClipboard=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div>
        <h1>Password generator</h1>
        <div>
          <input 
          type="text" 
          id="password" 
          placeholder='password'
          value={password}
          ref={passwordRef}
          readOnly
          className='border border-black rounded-sm p-1'
           />
           <button className='bg-blue-500 rounded-sm p-1' onClick={copyToClipboard}>copy</button>
        </div>
        <div className='flex flex-wrap justify-center'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label >Length:{length}</label>
          <input type="checkbox" defaultChecked={isNumberAllowed} onChange={()=>{setIsNumberAllowed(prev=>!prev)}} />
          <label >numbers</label>
          <input type="checkbox" defaultChecked={isCharactersAllowed} onChange={()=>{setIsCharactersAllowed(prev=>!prev)}} />
          <label >characters</label>
        </div>
      </div>
    </>
  )
}

export default App
