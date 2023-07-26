import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as messageReducer from './redux/wishMessage/wishMessage.reducer'
import * as messageActions from './redux/wishMessage/wishMessage.actions';

let WishMessage = ()=>{
    let dispatch = useDispatch();

    let messageInfo = useSelector((state)=>{
        return state[messageReducer.messageFeatureKey];
    })

    let clickGoodMorning = ()=>{
        dispatch(messageActions.printGoodMorning());
    }

    let clickAfternoon = () =>{
        dispatch(messageActions.printGoodAfternoon());
    }

    let clickEvening = () =>{
        dispatch(messageActions.printGoodEvening());
    }

    return(
        <React.Fragment>
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <p className="h2">Wish Message</p>
                                </div>
                                <div className="card-body">
                                    <p className="h4">{messageInfo.message}</p>
                                    {/* <pre>{JSON.stringify(messageInfo)}</pre> */}
                                    <button onClick={clickGoodMorning}  className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={clickAfternoon} className="btn btn-warning btn-sm">Good Afternoon</button>
                                    <buuton onClick={clickEvening} className="btn btn-danger btn-sm">GOod Evening</buuton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default WishMessage;