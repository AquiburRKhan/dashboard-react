import { watchLoginSaga } from './authSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        watchLoginSaga()
    ])
}