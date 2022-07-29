const throttle = (callback: any, timeout: number) => {
    let timerId: any = null;
    return (e?: any) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, timeout);
    };
};

export default throttle;
