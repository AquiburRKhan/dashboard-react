import { r as Rehive } from '../utils/rehive';
import { put, takeLatest } from 'redux-saga/effects';

const LOGIN_REQUEST = 'login_request';
const LOGIN_REQUEST_SUCCESS = 'login_request_success';
const LOGIN_REQUEST_FAILED = 'login_request_failed';
const GET_LOGGED_IN_USER = 'get_admin_user';
const GET_LOGGED_IN_USER_SUCCESS = 'get_admin_user_success';
const GET_LOGGED_IN_USER_FAILED = 'get_admin_user_failed';

export const loginAdmin = loginCredentials => {
    return {
        type: LOGIN_REQUEST,
        payload: loginCredentials
    }
};

export const getLoggedInUser = () => {
    return {
        type: GET_LOGGED_IN_USER
    }
};

function* loginSaga(params) {
    try {
        const result = yield Rehive.auth.login(params.payload);
        // save token for services
        //'Token ' + result.token
        yield put({ type: LOGIN_REQUEST_SUCCESS, user: result.user });
    } catch (error) {
        yield put({ type: LOGIN_REQUEST_FAILED, error: error });
    }
}

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga)
}

function* getLoggedInUserSaga() {
    try {
        const result = yield Rehive.user.get();
        yield put({ type: GET_LOGGED_IN_USER_SUCCESS, user: result });
    } catch (error) {
        // yield put({ type: LOGIN_REQUEST_FAILED, error: error.data });
    }
}

export function* watchGetLoggedInUserSaga() {
    yield takeLatest(GET_LOGGED_IN_USER, getLoggedInUserSaga)
}

export const reducer = (state = {}, action) => {
    let obj = {};
    switch (action.type){
        case LOGIN_REQUEST_SUCCESS:
            obj = {
                adminUser: action.user,
                error: null
            };
            return { ...state, ...obj};
        case LOGIN_REQUEST_FAILED:
            obj = {
                adminUser: {},
                error: action.error
            };
            return { ...state, ...obj};
        case GET_LOGGED_IN_USER_SUCCESS:
            obj = {
                adminUser: action.user,
                error: null
            };
            return { ...state, ...obj };
        case GET_LOGGED_IN_USER_FAILED:
            obj = {
                adminUser: {},
                error: action.error
            };
            return { ...state, ...obj};
        default:
            return state;
    }
};