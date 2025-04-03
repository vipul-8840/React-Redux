import React from "react";
import { 
  useAddAccountMutation, 
  useDeleteAccountMutation, 
  useGetAccountsQuery 
} from "../api/adminSlice";

const Admin = () => {
  const { data, error, isLoading } = useGetAccountsQuery();
//   const [addAccount] = useAddAccountMutation();
//   const [deleteAccount] = useDeleteAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h3>Admin Component</h3>
        {data &&
          data.map((accounts) => (
            <div key={Math.random()}>
              <h6>{accounts.id}:{accounts.amount}</h6>
              {/* <button onClick={() => deleteAccount(accounts.id)}>Delete Account</button> */}
            </div>
          ))}
        {/* <button onClick={() => addAccount({ id: data.length + 1, amount: 102 })}>
          Add Account
        </button> */}
      </div>
    </div>
  );
};

export default Admin;