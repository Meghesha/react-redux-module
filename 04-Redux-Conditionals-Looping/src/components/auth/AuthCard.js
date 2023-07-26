import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authCardActions from '../../redux/auth/authCard.actions';
import * as authCardReducer from '../../redux/auth/authCard.reducer';

let AuthCard = ()=>{
    let authInfo = useSelector((state)=>{
        return state[authCardReducer.authCardFeatureKey]
    })

    let dispatch = useDispatch();

    let login = ()=>{
        dispatch(authCardActions.login());
    }

    let logout = ()=>{
        dispatch(authCardActions.logout());
    }

    let {isLoggedIn} = authInfo;

    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <p className="h4">Auth Card</p>
                                    </div>
                                    <div className="card-body">
                                        {
                                            isLoggedIn ?
                                            <button onClick={logout} className="btn btn-danger btn-sm">LogOut</button>  : 
                                            <button onClick={login} className="btn btn-success btn-sm">Login</button>
                                       
                                        } 
                                        
                                        {
                                                isLoggedIn ?
                                                <React.Fragment>
                                                     <p className="h4">Welcome User!</p>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum ut cumque odio, dolorem provident libero maxime reiciendis commodi neque?</p>
                                                </React.Fragment> :
                                                <React.Fragment>
                                                     <p className="h4">Welcome Guest User!</p>
                                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum ut cumque odio, dolorem provident libero maxime reiciendis commodi neque?</p>
                                                </React.Fragment>
                                         } 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )
}
export default AuthCard;