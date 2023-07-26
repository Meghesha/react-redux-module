import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as hobbyRadioReducer from '../../redux/hobby_radio/hobbyRadio.reducer';
import * as hobbyRadioActions from '../../redux/hobby_radio/hobbyRadio.actions';

let HobbySelectorRadio = ()=>{
    let dispatch = useDispatch();

    let hobbyInfo = useSelector((state)=>{
        return state[hobbyRadioReducer.hobbyRadioFeatureKey];
    })

    let {hobby} = hobbyInfo;

    let changeEating = (e)=>{
        dispatch(hobbyRadioActions.selectEating(e));
    }

    let changeCoding = (e)=>{
        dispatch(hobbyRadioActions.selectCoding(e))
    }

    let changeSleeping = (e)=>{
        dispatch(hobbyRadioActions.selectSleeping(e))
    }

    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Hobby Selector</p>
                                    </div>
                                    <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-check">
                                                <input onChange={changeEating} className="form-check-input" type="radio" name="success" id="exampleRadios1" value="success"/>
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    Success
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={changeCoding} className="form-check-input" type="radio" name="warning" id="exampleRadios2" value="warning"/>
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    Warning
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={changeSleeping} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="danger"/>
                                                <label className="form-check-label" htmlFor="exampleRadios3">
                                                    Danger
                                                </label>
                                            </div>
                                         </div>    
                                        
                                        

                                            <div className="col-md-9">
                                                {
                                                    hobby=== 'success' &&
                                                    <div className="card m-2 animated jello">
                                                      <div className="card-body bg-success text-white" style=  {{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Success</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                    </div>
                                                }
                                                {
                                                    hobby==='warning' &&
                                                    <div className="card m-2 animated shake">
                                                    <div className="card-body bg-warning text-white" style={{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Warning</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                    </div>
                                                    </div>
                                                }
                                                
                                                {  
                                                    hobby==='danger' &&
                                                    <div className="card m-2 animated tada">
                                                    <div className="card-body bg-danger text-white" style={{borderRadius : '5px'}}>
                                                          <p className="h4"><i className="fa fa-check-circle"/>Danger</p>
                                                          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                  </div>

                                                }
                                                </div>
                                            </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
    )

}
export default HobbySelectorRadio;