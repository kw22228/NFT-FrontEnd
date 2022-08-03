import React, { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IScroll } from '../../types/GsapTypes';

const ScrollTriggerProxy = () => {
    const { scroll }: IScroll = useLocomotiveScroll();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        setTimeout(() => {
            if (scroll) {
                const element = scroll.el as HTMLDivElement;

                scroll.on('scroll', (position: any) => {
                    ScrollTrigger.update();
                });

                ScrollTrigger.scrollerProxy(element, {
                    scrollTop(value: number | undefined) {
                        return arguments.length
                            ? scroll.scrollTo(value, 0, 0)
                            : scroll.scroll.instance.scroll.y;
                    }, // We don't have to define a scrollLeft because we're only scrolling vertically.
                    scrollLeft(value: number | undefined) {
                        return arguments.length
                            ? scroll.scrollTo(value, 0, 0)
                            : scroll.scroll.instance.scroll.x;
                    },
                    getBoundingClientRect() {
                        return {
                            top: 0,
                            left: 0,
                            width: window.innerWidth,
                            height: window.innerHeight,
                        };
                    },
                    //LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform
                    pinType: element.style.transform ? 'transform' : 'fixed',
                });

                ScrollTrigger.defaults({
                    scroller: element,
                });

                return () => {
                    ScrollTrigger.addEventListener('refresh', () => scroll?.update());
                    ScrollTrigger.refresh();
                };
            }
        }, 0);
    }, [scroll]);
    return null;
};

export default ScrollTriggerProxy;
