export default function promise(callback: any, timeout?: number) {
    return new Promise((resolve, reject) => {
        callback();

        timeout ? setTimeout(() => resolve(true), timeout) : resolve(true);
    });
}
