import React, { useState } from 'react'

const Account = ({Increment,Decrement,accounts,IncrementByAmt}) => {
    const [value,setValue] = useState();
   
  return (
    <div className='card'>
        <div className='container'>
            <h4>Account Component</h4>
            <h3>Amount:{accounts.amount}</h3>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <input value={value} 
            onChange={(e)=>
            {
              
              setValue(e.target.value)
            }}/>
            <button onClick={()=>IncrementByAmt(value)}>IncrementByAmount</button>
        </div>
    </div>
  )
}

export default Account;
