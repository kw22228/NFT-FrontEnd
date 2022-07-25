import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { Scroll } from 'react-locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useLocoScroll = (start: boolean) => {
    useEffect(() => {
        if (!start) return;
        // let locoScroll: IScroll = null;

        const scrollEl = document.querySelector('#App') as HTMLElement;
        let locoScroll: any = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            // class: 'is-reveal',
        });

        locoScroll.on('scroll', () => ScrollTrigger.update()); // On scroll of locomotive, update scrolltrigger

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value) {
                if (locoScroll) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, 0, 0)
                        : locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value) {
                if (locoScroll) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, 0, 0)
                        : locoScroll.scroll.instance.scroll.x;
                }
                return null;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: scrollEl.style.transform ? 'transform' : 'fixed',
        });

        const lsUpdate = () => {
            if (locoScroll) {
                locoScroll.update();
            }
        };

        ScrollTrigger.addEventListener('refresh', lsUpdate);
        ScrollTrigger.refresh();

        return () => {
            if (locoScroll) {
                ScrollTrigger.removeEventListener('refresh', lsUpdate);
                locoScroll.destroy();
                locoScroll = null;
                console.log('Kill', locoScroll);
            }
        };
    }, [start]);
};

export default useLocoScroll;
