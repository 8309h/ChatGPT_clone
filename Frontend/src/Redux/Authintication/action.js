import axios from 'axios';
import { LOGIN_SUCESSFUL, REQUEST, SIGNUP_SUCESSFUL } from './actionType';


export const login = (data) => (dispatch) => {
    dispatch({ type: REQUEST });
    console.log("clicked");
   return axios.post('https://reqres.in/api/login', data).then((res) => {
        dispatch({ type: LOGIN_SUCESSFUL, payload: res.data.token })
    }).catch((err) => {
        console.log(err.message);
    })
}
export const signup = (data) => (dispatch) => {
    dispatch({ type: REQUEST });
  return  axios.post('https://reqres.in/api/login', data).then((res) => {
        dispatch({ type: SIGNUP_SUCESSFUL, payload: res.data.token })
    }).catch((err) => {
        console.log(err.message);
    })
}

