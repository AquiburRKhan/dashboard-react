import { LOGIN_REQUEST_SUCCESS,LOGIN_REQUEST_FAILED } from "../actions/actionTypes/index";

const initialState = {
    isAuthenticated: false,
    error: []
};

export default function (state = initialState, action) {
    switch (action.type){
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
            }
        case LOGIN_REQUEST_FAILED:
            return state;
        default:
            return state;
    }
}