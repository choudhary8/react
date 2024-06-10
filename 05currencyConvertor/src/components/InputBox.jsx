import React,{useId} from 'react';

function InputBox ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency='usd',
    currencyOptions=[],
    amountDisable=false,
    currencyDisable=false,
    className=""
}){
    const amountId=useId();
    return (
        <div className='border border-black m-4'>
             <div>
            <label htmlFor={amountId}>{label}</label>
            <input 
            id={amountId}
            type="Number"
            value={amount}
            placeholder='amount'
            onChange={e=>onAmountChange&&onAmountChange(e.target.value)}
            disabled={amountDisable}
            />
        </div>
        <div> 
        <label>Currency Type</label>
            <select
            onChange={e=>onCurrencyChange&&onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
            value={selectCurrency}
            >
                {currencyOptions.map(currency=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
        </div>
    )
}

export default InputBox;