import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as hobbySelectorActions from '../../redux/hobby/hobby.actions';
import * as hobbySelectorReducer from '../../redux/hobby/hobby.reducer';

let HobbySelector = ()=>{
    let hobbyInfo = useSelector((state)=>{
        return state[hobbySelectorReducer.HobbySelectorFeatureKey]
    })

    let dispatch = useDispatch();

    let updateEating = (e)=>{
        dispatch(hobbySelectorActions.clickEating(e))    
    }

    let updateCoding = (e)=>{
        dispatch(hobbySelectorActions.clickCoding(e))
    }

    let updateSleeping = (e)=>{
        dispatch(hobbySelectorActions.clickSleeping(e))
    }

    let {eating, coding , sleeping} = hobbyInfo;
    
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
                                        <form>
                                            <div className="form-group">
                                            <div className="form-check">
                                                <input name='eating' onClick={updateEating}  className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input name='coding' onClick={updateCoding}  className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label className="form-check-label" htmlFor="defaultCheck2">
                                                    Coding
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input name='sleeping' onClick={updateSleeping}  className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label className="form-check-label" htmlFor="defaultCheck2">
                                                    Sleeping
                                                </label>
                                            </div>
                                            </div>

                                            <div className="col-md-9">
                                                {
                                                    eating &&
                                                    <div className="card m-2 animated jello">
                                                      <div className="card-body bg-success text-white" style=  {{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Eating</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                    </div>
                                                }
                                                {
                                                    coding &&
                                                    <div className="card m-2 animated shake">
                                                    <div className="card-body bg-warning text-white" style={{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Coding</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                    </div>
                                                    </div>
                                                }
                                                
                                                {  
                                                    sleeping &&
                                                    <div className="card m-2 animated tada">
                                                    <div className="card-body bg-danger text-white" style={{borderRadius : '5px'}}>
                                                          <p className="h4"><i className="fa fa-check-circle"/>Sleeping</p>
                                                          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                  </div>

                                                }
                                              
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
    )

}
export default HobbySelector;