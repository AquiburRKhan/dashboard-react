import { r as Rehive } from '../../utils/rehive';
import { put, takeLatest } from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCESS} from "../actions/actionTypes/index";

function* loginSaga(params) {
    try {
        const result = yield Rehive.auth.login(params.payload);
        yield put({ type: LOGIN_REQUEST_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: LOGIN_REQUEST_FAILED, error: error.data });
    }
}

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga)
}