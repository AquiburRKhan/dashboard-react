import { r as Rehive } from '../../../utils/rehive';
import { put, takeLatest } from 'redux-saga/effects';
import { setLocalStorageValue } from '../../../utils/localStorageManagement';
import {LOGIN_REQUEST, LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCESS} from "../../actions/actionTypes/index";

function* loginSaga(params) {
    try {
        const result = yield Rehive.auth.login(params.payload);
        // save token for services
        setLocalStorageValue('TOKEN','Token ' + result.token);
        yield put({ type: LOGIN_REQUEST_SUCCESS, user: result.user });
    } catch (error) {
        // yield put({ type: LOGIN_REQUEST_FAILED, error: error.data });
    }
}

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga)
}