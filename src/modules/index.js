import { combineReducers } from 'redux';
import { reducer as loggedInUser, watchLoginSaga , watchGetLoggedInUserSaga } from './login';
import { reducer as formReducer } from 'redux-form';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    loggedInUser,
    form: formReducer
});

function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchGetLoggedInUserSaga()
    ])
}

export {
    rootReducer,
    rootSaga
};