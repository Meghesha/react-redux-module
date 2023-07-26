import * as hobbyRadioActions from './hobbyRadio.actions';

export const hobbyRadioFeatureKey = 'hobby-radio-info';

let intialState = {
    hobby : null
}

export const reducer =(state=intialState , action)=>{
    let {type , payload} = action;
    switch(type){
        case hobbyRadioActions.SELECT_EATING :
            return {
                hobby : payload.value
            }
        case hobbyRadioActions.SELECT_CODING :
            return {
                hobby : payload.value
            }
        case hobbyRadioActions.SELECT_SLEEPING :
            return {
                hobby : payload.value
            }        
        default : return state;    
    }
}