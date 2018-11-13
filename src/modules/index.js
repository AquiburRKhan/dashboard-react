import { combineReducers } from 'redux';
import { reducer as loggedInUser, watchLoginSaga , watchGetLoggedInUserSaga } from './login';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    loggedInUser,
    form: formReducer,
    toastr: toastrReducer
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