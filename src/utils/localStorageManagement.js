export const getLocalStorageValue = localStorageName => {
    return localStorage.getItem(localStorageName);
};

export const setLocalStorageValue = (localStorageName, localStorageValue) => {
    localStorage.setItem(localStorageName, localStorageValue);
};

export const deleteLocalStorageValue = localStorageName => {
    localStorage.removeItem(localStorageName);
};

export const clearAllLocalStorage = () => {
    localStorage.clear();
};