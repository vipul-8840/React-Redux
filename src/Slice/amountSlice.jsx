import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    amount:10
}
const counterSlice =  createSlice({
    name:'account',
    initialState,
    reducers:{
        increment:(state)=>{
            state.amount = state.amount+1;
        },
        decrement:(state)=>{
            state.amount = state.amount-1;
        },
        incrementByAmount :(state,action)=>{
             state.amount = state.amount+ Number(action.payload);
        },
    }
}) 

export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;