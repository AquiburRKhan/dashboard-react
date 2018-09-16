import { combineReducers } from 'redux';
import AuthReducer from './authReducers';

const rootReducer = combineReducers({
    auth: AuthReducer
});

export default rootReducer;