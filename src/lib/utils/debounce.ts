const debounce = (callback: any, timeout: number) => {
    let timer: any;
    return (...args: any) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, timeout);
    };
};

export default debounce;
