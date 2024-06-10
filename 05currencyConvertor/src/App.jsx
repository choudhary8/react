import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0)
  const [amount,setAmount]=useState(0)
  const [convertedAmount,setConvertedAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState('inr')


  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);

  const convert=()=>{
    setConvertedAmount(currencyInfo[to]*amount);
  }

  return (
    <>
     <h1 className='bg-green-500'>Currency Convertor</h1>
     <InputBox 
     label="from"
     amount={amount}
     onAmountChange={(amount)=>setAmount(amount)}
     onCurrencyChange={(currency)=>setFrom(currency)}
     selectCurrency={from}
     currencyOptions={options}
     ></InputBox>

     <InputBox
     label="to"
     amount={convertedAmount}
     selectCurrency={to}
     amountDisable
     onCurrencyChange={(currency)=>setTo(currency)}
     currencyOptions={options}
     ></InputBox>

     <button onClick={()=>convert()} className='border border-black p-1'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
    </>
  )
}

export default App
