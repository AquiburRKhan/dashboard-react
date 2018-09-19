import { LOGIN_ADMIN } from "../actions/authActions";

export default function (state = {}, action) {
    switch (action.type){
        case LOGIN_ADMIN:
            return state;
        default:
            return state;
    }
}