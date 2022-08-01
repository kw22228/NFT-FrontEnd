import React from 'react';

const delay = (callback: () => void, timeout: number) => {
    setTimeout(() => callback(), timeout);
};

export default delay;
