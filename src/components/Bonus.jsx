import React, { useState } from 'react'
import { incrementBonus } from '../accounts'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Slice/bonusSlice';

const Bonus = ({store}) => {
  const amount = useSelector(state =>state.account.amount);
  const points= useSelector(state=>state.bonus.points)
    const dispatch = useDispatch();
  return (
    <div className="card">
    <div className="container">
      <h4>
        <b>Bonus Component</b>
      </h4>
      <h3>Total point: {points} </h3>
      <h3>Amount:${amount}</h3>
      <button onClick={()=>dispatch(increment())}>Increment +</button>
    </div>
  </div>
  )
}

export default Bonus
