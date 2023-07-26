import * as productActions from './productItem.actions';

//feature key, initial state , action

export const productItemFeatureKey = 'product-item';

let initialState = {
    product : {
        sno : '104sd',
        image : 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1668271334/Croma%20Assets/Communication/Wearable%20Devices/Images/262052_0_ibxrul.png/mxw_1440,f_auto',
        name : 'Smart Watch',
        price : 2500,
        qty : 1
    }
}

export const reducer = (state = initialState , action)=>{
    switch(action.type){
        case productActions.INCR_QTY :
            return {
                product : {
                    ...state.product,
                    qty : state.product.qty +1
                }
            }
        case productActions.DECR_QTY :
            return {
                product : {
                    ...state.product,
                    qty : state.product.qty - 1 > 0 ? state.product.qty -1 : 1 
                }
            }    
        default : return state;    
    }
}