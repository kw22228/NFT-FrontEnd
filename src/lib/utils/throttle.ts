const throttle = (callback: any, timeout: number) => {
    let waiting: any = false;

    return (e?: any) => {
        if (waiting) return;
        waiting = setTimeout(() => {
            callback.call(this, e);
            waiting = false;
        }, timeout);
    };
};

export default throttle;
