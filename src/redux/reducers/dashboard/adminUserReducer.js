import { LOGIN_REQUEST_SUCCESS , GET_ADMIN_USER_SUCCESS } from "../../actions/actionTypes/index";

export const adminUser = (state = {}, action) => {
    switch (action.type){
        case LOGIN_REQUEST_SUCCESS:
            return { ...state, ...action.user };
        case GET_ADMIN_USER_SUCCESS:
            return { ...state, ...action.user };
        default:
            return state;
    }
};