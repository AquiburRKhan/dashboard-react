import { watchLoginSaga } from './auth/loginSaga';
import  { watchGetAdminUserSaga } from "./dashboard/adminUserSaga";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchGetAdminUserSaga()
    ])
}