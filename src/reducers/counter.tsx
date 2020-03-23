export const counterReducer=(state=0, action:any)=>
{
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'INCREMENTBY':
            return state+action.payload
        case 'DECREMENT':
            return state-1
        case 'RESET':    
            return 0
            default:
                return state;
    }
}

