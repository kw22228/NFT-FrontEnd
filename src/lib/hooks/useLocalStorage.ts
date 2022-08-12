import React from 'react';

const useLocalStorageState = (key: string, value?: string) => {
    const getLocalStorage = (key: string) => window.localStorage.getItem(key);
    const setLocalStorage = (key: string, value: string) => {
        window.localStorage.setItem(key, value);
    };

    return value ? [getLocalStorage(key), setLocalStorage] : getLocalStorage(key);
};

export default useLocalStorageState;
