import  axios from "axios";

const URL='http://localhost:5000/api/account/';

export async function authenticate(mode,email, password ){
    const url = `${URL}${mode}`;
   const response= await axios.post(url, {email:email, password:password} )
   const token=response.data.token;
   return token;
}

export function login(email, password){
    return authenticate('login', email, password)
}

export function signup(email, password){
    return authenticate('register', email, password)
}