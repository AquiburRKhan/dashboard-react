import { r as Rehive } from '../../../utils/rehive';
import { put, takeLatest } from 'redux-saga/effects';
import { GET_ADMIN_USER, GET_ADMIN_USER_FAILED, GET_ADMIN_USER_SUCCESS} from "../../actions/actionTypes/index";

function* getAdminUserSaga(params) {
    try {
        const result = yield Rehive.user.get();
        yield put({ type: GET_ADMIN_USER_SUCCESS, user: result });
    } catch (error) {
        // yield put({ type: LOGIN_REQUEST_FAILED, error: error.data });
    }
}

export function* watchGetAdminUserSaga() {
    yield takeLatest(GET_ADMIN_USER, getAdminUserSaga)
}