import * as authCardActions from './authCard.actions';

export const authCardFeatureKey = 'auth-info';

let initialState = {
    isLoggedIn : false
}

export const reducer = (state=initialState , action)=>{
    switch(action.type){
        case authCardActions.LOGIN : 
          return { isLoggedIn : true }
        case authCardActions.LOGOUT : 
          return { isLoggedIn : false }  
        default : return state;
    }
}