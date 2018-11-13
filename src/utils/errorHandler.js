import { toastr } from 'react-redux-toastr';
import { deleteLocalStorageValue } from './localStorageManagement';

export const evaluateErrors = (errors) => {

    let fn = function* (errors){
        let handleError = (error,key) => {
            if(key === 'non_field_errors'){
                key = 'error';
            }
            var errorTitle = (key.charAt(0).toUpperCase() + key.slice(1));
            if((errorTitle === 'Password1' || errorTitle === 'Password2')){
                errorTitle = 'Password';
            }

            toastr.error(error, errorTitle);
        };

        if(errors && errors.data){
            for(let key in errors.data){
                if (errors.data.hasOwnProperty(key)) {
                    if(Array.isArray(errors.data[key])){
                        for (let error of errors.data[key]) {
                            yield handleError(error,key);
                        }
                    } else {
                        yield toastr.error(errors.message);
                    }
                }
            }
        } else{
            if(errors && errors.message){
                if(errors.message === 'Invalid token.'){
                    yield toastr.error('Your session has expired, please log in again');
                } else {
                    yield toastr.error(errors.message);
                }
            } else {
                yield toastr.error('Something went wrong, please check your internet connection or try again');
            }
        }

        if(errors && errors.status){
            if(errors.status === 401){
                yield deleteLocalStorageValue('token');
            }
        }
    };

    let gen = fn(errors);

    while (!gen.next().done) {
        gen.next()
    }
};

