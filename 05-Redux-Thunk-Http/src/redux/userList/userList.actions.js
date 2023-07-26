import Axios from 'axios';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

/* let fetchUserRequest = ()=>{
    return {type : FETCH_USER_REQUEST}
}

let fetchUserSuccess = (users) =>{
    return {type : FETCH_USER_SUCCESS , payload : users}
}

let fetchUserFailure = (error) =>{
    return {type : FETCH_USER_FAILURE , payload : error}
}

//Actual action
export const fetchAllUsers = ()=>{
    return((dispatch)=>{
        dispatch(fetchUserRequest());
        let dataURL ='https://jsonplaceholder.typicode.com/users';
        Axios.get(dataURL).then((response)=>{
            dispatch(fetchUserSuccess(response.data));
        }).catch((error)=>{
            dispatch(fetchUserFailure(error));
        })
    })
} */


 /* //Simple Way (JS Promises)
export const fetchAllUsers =()=>{
    return((dispatch)=>{
        dispatch({type: FETCH_USER_REQUEST})
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(dataURL).then((response)=>{
            dispatch({type : FETCH_USER_SUCCESS , payload : response.data})
        }).catch((error)=>{
            dispatch({type:FETCH_USER_FAILURE , payload : error})
        })
    })
} */

//JS Async-Await
export const fetchAllUsers = ()=>{
    return async(dispatch)=>{
        dispatch({type : FETCH_USER_REQUEST});
        try{
            let dataURL = 'https://jsonplaceholder.typicode.com/users';
            let response = await Axios.get(dataURL);
            dispatch({type:FETCH_USER_SUCCESS , payload : response.data})
        }
        catch(error){
            dispatch({type:FETCH_USER_FAILURE , payload : error})
        }
    }
}