import * as contactAppActions from './contactApp.actions';

export const contactAppFeatureKey = 'contactApp';

let initialState = {
    loading : false,
    contacts : [],
    selectedContact : {},
    errorMessage : ''
}

export const reducer = (state=initialState , action)=>{
    let{type , payload}= action;
    switch(type){
        case contactAppActions.FETCH_CONTACTS_REQUEST :
            return{
                ...state,
                loading : true
            }
        case contactAppActions.FETCH_CONTACTS_SUCCESS :
            return{
                ...state,
                loading : false,
                contacts : payload
            }
        case contactAppActions.FETCH_CONTACTS_FAILURE :
            return{
                ...state,
                loading : false,
                errorMessage : payload
            } 
        case contactAppActions.SELECT_CONTACT :
            return{
                ...state,
                selectedContact : payload
            }            
        default: return state;    
    }
    
}