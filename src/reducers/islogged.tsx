export const isloggedReducer=(state=false, action:any)=>{
    switch(action.type){
        case 'SIGN_IN':
            return !state
            default:
                return state;
    }
}