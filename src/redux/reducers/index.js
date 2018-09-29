import { combineReducers } from 'redux';
import { adminUser } from './dashboard/adminUserReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    adminUser: adminUser,
    form: formReducer
});

export default rootReducer;