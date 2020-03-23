export const increment=()=>{
    return {
        type:'INCREMENT'
    };
};

export const incrementBySomeValue=(nr:any)=>{
    return {
        type:'INCREMENTBY',
        payload:nr
    };
};
export const decrement=()=>{
    return {
        type:'DECREMENT'
    };
};


export const reset=()=>{
    return {
        type:'RESET'
    };
};




