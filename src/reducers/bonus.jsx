import { incBonus, incByAmt } from "../accounts";

export function bonusReducers(state={points:0},action)
{
   switch (action.type)
   {
      case incBonus:
        return {points:state.points+1};
      case incByAmt:
        if(action.payload>=100)
         {return {points:state.points+1}}
        return state;
     

      default:
        return state
   }
}