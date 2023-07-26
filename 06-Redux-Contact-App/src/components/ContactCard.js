import React from 'react';
import { useSelector } from 'react-redux';
import * as contactAppReducer from '../redux/contactApp/contactApp.reducer';
import spinner from '../assets/images/spinner.gif';

let ContactCard = ()=>{
    let contactsInfo = useSelector((state)=>{
        return state[contactAppReducer.contactAppFeatureKey]
    })

    let {selectedContact , loading} = contactsInfo;

    return(
        <React.Fragment>
            {
                loading && 
                <img src={spinner} alt="" className='d-block m-auto' />
            }
        {
            Object.keys(selectedContact).length > 0 ?
            <React.Fragment>
                {/* <pre>{JSON.stringify(selectedContact)}</pre>S */}
                <div className="card sticky-top">
                    <div className="card-header bg-info text-white">
                        <p className="h4">Contact Card</p>
                    </div>
                    <div className="card-body text-center">
                        <img src={selectedContact.picture.large} alt="" className='img-thumbnail rounded-circle w-50 contact-img' />
                        <ul className='list list-group'>
                            <li className="list-group-item">{selectedContact.name.first} {selectedContact.name.last}</li>
                            <li className="list-group-item">{selectedContact.email}</li>
                            <li className="list-group-item">{selectedContact.phone}</li>
                            <li className="list-group-item">{selectedContact.location.city}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>  : null  
        }
    </React.Fragment>
    )

}
export default ContactCard;