import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactAppActions from '../redux/contactApp/contactApp.actions';
import * as contactAppReducer from '../redux/contactApp/contactApp.reducer';
import spinner from '../assets/images/spinner.gif';

let ContactList = ()=>{
    let dispatch = useDispatch();

    //getcontacts information from REDUX store
    let contactsInfo = useSelector((state)=>{
        return state[contactAppReducer.contactAppFeatureKey]
    })

    useEffect(()=>{
        dispatch(contactAppActions.fetchAllContacts())
    },[])

    let {loading, contacts , errorMessage} = contactsInfo;

    let clickContact = (contact)=>{
        dispatch(contactAppActions.getSelectedContact(contact))
    }

    return(
        <React.Fragment>
            {
                loading && 
                <img src={spinner} alt="" className='d-block m-auto' />
            }
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                 {
                    !loading && contacts.length > 0 ?
                    <React.Fragment>
                        <table className="table table-hover table-striped text-center table-secondary">
                                <thead className='table-dark text-white'>
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    contacts.length > 0 ?
                                    <React.Fragment>
                                        {
                                            contacts.map(contact => {
                                                return(
                                                        <tr key={contact.login.uuid} onClick={clickContact.bind(this,contact)}>
                                                           <td>{contact.login.uuid}</td>
                                                           <td>{contact.name.first} {contact.name.last}</td>
                                                           <td>{contact.email}</td>
                                                           <td>{contact.phone}</td>
                                                           <td>{contact.location.city}</td> 
                                                        </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                                }
                                 </tbody>
                            </table>
                    </React.Fragment> : null    
                 }
            </React.Fragment>
    )

}
export default ContactList;