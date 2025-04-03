import React from 'react'
import { useGetAccountsQuery } from '../api/adminSlice'

const Admin = () => {
     const {data,error,isLoading} = useGetAccountsQuery();
  return (
    <div className='card'>
        <div className='container'>
             <h3>Admin Component</h3>
             {
                data && data.map((accounts)=>{
                    return <p>{accounts.amount}</p>
                })
             }
        </div>
    </div>
  )
}

export default Admin
