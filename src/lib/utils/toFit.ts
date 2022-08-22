import React from 'react';

export default function tooFit(callback: any) {
    let tick = false;

    return function trigger() {
        if (tick) {
            return;
        }

        tick = true;
        return requestAnimationFrame(function task() {
            tick = false;
            return callback();
        });
    };
}
