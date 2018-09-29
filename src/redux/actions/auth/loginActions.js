import { LOGIN_REQUEST } from '../actionTypes/index';

export function loginAdmin(loginCredentials) {
    return {
        type: LOGIN_REQUEST,
        payload: loginCredentials
    }
}