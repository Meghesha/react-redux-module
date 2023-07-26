export const SELECT_EATING = 'SELECT_EATING';
export const SELECT_CODING = 'SELECT_CODING';
export const SELECT_SLEEPING = 'SELECT_SLEEPING';

export const selectEating = (event) =>{
    return { type : SELECT_EATING, payload : {value : event.target.value}}
};

export const selectCoding = (event) =>{
    return { type : SELECT_CODING, payload : {value : event.target.value}}
};

export const selectSleeping = (event) =>{
    return { type : SELECT_SLEEPING, payload : {value : event.target.value}}
};
