import Rehive from 'rehive';

let r = {};

if(process.env.REACT_APP_SDK_ENV === 'normal'){
    r = new Rehive({ apiVersion: 3, storageMethod: 'local' });
} else if(process.env.REACT_APP_SDK_ENV === 'staging'){
    r = new Rehive({ apiVersion: 3, storageMethod: 'local', network: 'staging'});
} else {
    r = new Rehive({apiVersion: 3, storageMethod: 'local'});
}

export { r };