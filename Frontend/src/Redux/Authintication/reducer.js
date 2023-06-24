import { FAIL, LOGIN_SUCESSFUL, REQUEST, SIGNUP_SUCESSFUL } from "./actionType";

const initilaSate = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: ''
}

export const reducer = (state = initilaSate, { type, payload }) => {
    switch (type) {
        case REQUEST:
            return { ...state, isLoading: true };
        case LOGIN_SUCESSFUL:
            return { ...state, isLoading: false, token: payload,isAuth : true };
        case FAIL:
            return { ...state, isLoading: false, isError: true };
        case SIGNUP_SUCESSFUL:
            return { ...state, isLoading: false };
        default:
            return state;
    }
}