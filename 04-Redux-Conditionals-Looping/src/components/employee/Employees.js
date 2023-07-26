import React from 'react';
import { useSelector } from 'react-redux';
import * as employeesReducer from '../../redux/employee/employee.reducer';

let Employees = ()=>{
    let employeeInfo = useSelector((state)=>{
        return state[employeesReducer.employeesFeatureKey]
    }) 

    let {employees} = employeeInfo;

    return(
        <React.Fragment>
                {/* <pre>{JSON.stringify(employees)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {
                                  employees.map((employee) => {
                                    return(
                                        <div key={employee.id} className="card m-3">
                                            <div className="card-body rgba-purple-light">
                                             <ul className='list-group'>
                                                <li className='list-group-item'>Id       : {employee.id}</li>
                                                <li className='list-group-item'>Name     : {employee.name}</li>
                                                <li className='list-group-item'>Age      : {employee.age}</li>
                                                <li className='list-group-item'>Degree   : {employee.degree}</li>
                                                <li className='list-group-item'>Location : {employee.location}</li>
                                             </ul>
                                            </div>
                                        </div>
                                    )
                                })
                                };  
                                
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
    )
}
export default Employees;