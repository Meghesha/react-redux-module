import Axios from 'axios';

export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export const SELECT_CONTACT = 'SELECT_CONTACT';

export const fetchAllContacts = ()=>{
    return async(dispatch)=>{
        dispatch({type : FETCH_CONTACTS_REQUEST});
        try{
            let dataURL='https://gist.githubusercontent.com/thenaveensaggam/6476ae426cd08e3ee8854a2bf1338a1e/raw/cd59ee3eb7ca2715606ba3f623ee165a4d0931c1/contacts-18082020.json';
            let response = await Axios.get(dataURL);
            dispatch({type: FETCH_CONTACTS_SUCCESS , payload:response.data})
        }
        catch(error){
            dispatch({type:FETCH_CONTACTS_FAILURE , payload:error})
        }
    }
}

export const getSelectedContact = (contact)=>{
    return {type:SELECT_CONTACT , payload:contact}
}