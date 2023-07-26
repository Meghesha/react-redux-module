import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userListActions from '../redux/userList/userList.actions';
import * as userListReducer from '../redux/userList/userList.reducer';
import spinner from '../assets/images/spinner.gif';

let UserList = ()=>{
    let dispatch = useDispatch();

    //get all users from the staore
    let userListInfo = useSelector((state)=>{
        return state[userListReducer.userListFeatureKey]
    })

    let clickGetUser = ()=>{
        dispatch(userListActions.fetchAllUsers());
    }

    let {loading, users, errorMessage} = userListInfo;

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">UserList</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi necessitatibus quaerat culpa, consequatur eius distinctio assumenda reiciendis! Doloremque, incidunt sint deleniti quam porro inventore molestiae ipsa quisquam qui neque pariatur expedita! Ea quaerat eos at omnis et qui error placeat?</p>    
                            <button onClick={clickGetUser} className="btn btn-secondary btn-sm">Get Users</button>
                        </div>
                    </div>
                    <div>
                        {
                            loading && 
                            <img src={spinner} alt="" className='d-block m-auto' />
                        }
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                           {
                            !loading && users.length > 0 ? 
                            <React.Fragment>
                                 <table className="table table-hover table-striped table-secondary text-center">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Website</th>
                                        <th>Company Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user)=>{
                                            return(
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.company.name}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                            </React.Fragment> : errorMessage
                           }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default UserList;