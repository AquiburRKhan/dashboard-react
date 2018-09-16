import { LOGIN } from "../actions/authActions";

export default function (state = {}, action) {
    switch (action.type){
        case LOGIN:
            return state;
        default:
            return state;
    }
}