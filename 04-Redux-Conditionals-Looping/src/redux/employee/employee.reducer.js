import * as employeesActions from './employee.actions';

export const employeesFeatureKey = 'employee-info';

let initialState = { employees :[
    {
        id : 'ABC100',
        name : 'Meghesh',
        age : 28,
        degree : 'BE',
        location : 'Karnataka'
    },
    {
        id : 'ABC101',
        name : 'Lakshmi Kanth',
        age : 26,
        degree : 'MBA',
        location : 'Andhra Pradesh'
    },
    {
        id : 'ABC102',
        name : 'Rajesh',
        age : 23,
        degree : 'BTech',
        location : 'Chennai'
    },
    {
        id : 'ABC103',
        name : 'Perumal',
        age : 27,
        degree : 'BTech',
        location : 'Koimattur'
    }
]};
    

export const reducer = (state=initialState , action) =>{
    switch(action.type){
        case employeesActions.FETCH_ALL_EMPLOYEES :
            return state;
        default : return state;    
    }
}


