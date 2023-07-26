import * as pizzaActions from './pizzaHut.actions';

//feature key , initial state , reducer
export const pizzaHutFeatureKey = 'pizzaHut';

let initialState = {
    count : 20
};

export const reducer = (state=initialState , action)=>{
    switch(action.type){
        case pizzaActions.BUY_PIZZA:
            return{
                count : state.count - 1 > 0 ? state.count - 1 : 0
            };
        default : return state
    }
}