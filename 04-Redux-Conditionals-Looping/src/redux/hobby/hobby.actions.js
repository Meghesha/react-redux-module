export const EATING = 'EATING';
export const CODING='CODING'
export const SLEEPING = 'SLEEPING'

export const clickEating = (event)=>{
    return { type : EATING , payload : {checked : event.target.checked}}
}

export const clickCoding = (event)=>{
    return { type : CODING , payload : {checked : event.target.checked}}
}

export const clickSleeping = (event)=>{
    return { type : SLEEPING , payload : {checked : event.target.checked}}
}