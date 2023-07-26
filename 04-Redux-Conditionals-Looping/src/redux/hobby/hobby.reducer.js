import * as hobbySelectorActions from './hobby.actions'

export const HobbySelectorFeatureKey = 'hooby-info';

let initialState = {
        eating : false,
        coding : false,
        sleeping : false
}

export const reducer = (state=initialState , action)=>{
    let {type , payload} = action;
    switch(type){
        case hobbySelectorActions.EATING :
            return {
                ...state,
                eating : payload.checked
            }
        case hobbySelectorActions.CODING :
            return {
                ...state,
                coding : payload.checked
            }
        case hobbySelectorActions.SLEEPING :
            return {
                ...state,
                sleeping : payload.checked
            }   
        default : return state;         
    }
}