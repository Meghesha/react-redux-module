import * as messageActions from './wishMessage.actions';

//feature key , initial state , reducer
export const messageFeatureKey = 'wish-message';

let intialState = {
    message : 'Hello'
}

export const reducer = (state = intialState , action) => {
    switch(action.type){
        case messageActions.PRINT_GOOD_MORNING : 
        return {
            message : 'Good Morning'
        }
        case messageActions.PRINT_GOOD_AFTERNOON : 
        return {
            message : 'Good Afternoon'
        }
        case messageActions.PRINT_GOOD_EVENING : 
        return {
            message : 'Good Evening'
        }
        default : return state;
    }
}