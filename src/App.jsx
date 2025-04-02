import { useState } from 'react'
import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'


function App({store}) {
 const[accounts,setAccounts]=useState({amount:0});
 const[bonus,setBonus]= useState({points:0});
     function incrementBonus()
     { 
       setBonus({points:bonus.points+1});
 
     }

 function Increment()
 {
  setAccounts({amount:accounts.amount+1});
 }
 function Decrement()
 {
    setAccounts({amount:accounts.amount-1})
 }

 function IncrementByAmt(value)
 {
      
  value = parseFloat(value);
     setAccounts({amount:accounts.amount+value});
 }
  return (
    <div className='App'>
         <h4>My App</h4>
         <h3>Course Amount :{store.getState().account.amount}</h3>
         <h3>Total Bonus : {store.getState().bonus.points}</h3>
         <Account Increment={Increment} Decrement={Decrement} accounts={accounts} IncrementByAmt={IncrementByAmt}></Account>
         <Bonus store={store}></Bonus>
    </div>
  )
}

export default App
