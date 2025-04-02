import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, getUserAccount, increment, incrementByAmount } from '../accounts';

const Account = () => {
  const amount = useSelector(state =>state.account.amount);
  const points= useSelector(state=>state.bonus.points);
  const dispatch = useDispatch();
  const[value,setValue]=useState();
   
  return (
    <div className='card'>
        <div className='container'>
            <h4>Account Component</h4>
            <h3>Amount:${amount}</h3>
            <h3>Bonus Points:{points}</h3>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <input value={value} 
            onChange={(e)=>
            {
              
              setValue(e.target.value)
            }}/>
            <button onClick={()=>dispatch(incrementByAmount(value))}>IncrementByAmount</button>
            <button onClick={()=>dispatch(getUserAccount(1))}>InitAccount</button>
        </div>
    </div>
  )
}

export default Account;
