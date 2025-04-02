import { dec, getAccUserFulfilled, getAccUserPending, getAccUserRejected, inc, incByAmt } from "../accounts";

export function accountReducers(state={amount:1},action)
{
    switch(action.type)
    {
        case inc:
            return {amount:state.amount+1};
        case dec :
            return {amount:state.amount-1};
        case incByAmt :
            return {amount:state.amount + action.payload}
        case getAccUserPending:
            return {...state,pending:true};     ;
        case getAccUserFulfilled:
            return {amount:action.payload,pending:false} 
        case getAccUserRejected:
            return {...state,error:action.error,pending:false}   ;
        default :
              return state;   
    }
}