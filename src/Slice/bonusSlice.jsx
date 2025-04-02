 import {createSlice} from '@reduxjs/toolkit';
const initialState = {
   points:0
}
const bonusSlice =  createSlice({
    name:'bonus',
    initialState,
    reducers:{
        increment:(state)=>{
            state.points = state.points+1;
        },
        decrement:(state)=>{
            state.points= state.points-1;
        },
        incrementByAmount :(state,action)=>{
             state.points = state.points + action.payload;
        },
    }
}) 

export const {increment,decrement,incrementByAmount} = bonusSlice.actions;
export default bonusSlice.reducer;