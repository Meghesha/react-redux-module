import * as userRegisterActions from './userRegister.actions';

//feature key, initialState , action
export const userRegisterFeatureKey = 'user-info';

let initialState = {
    user : {
        username : '',
        email : '',
        password : '',
        selectedCar : '',
        status : false
    }
}

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case userRegisterActions.REGISTER_USER :
            return {
                user : action.payload.user
            }
        default : return state;    
    }

}
