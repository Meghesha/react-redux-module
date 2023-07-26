export const REGISTER_USER = 'REGISTER_USER';

export const submitRegister = (user)=>{
    return{
        type: REGISTER_USER,
        payload : {user : user}
    }
}