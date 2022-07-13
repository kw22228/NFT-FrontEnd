import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const ScrollTriggerProxy = () => {
    // First let's get instance of locomotive scroll
    const { scroll } = useLocomotiveScroll();

    // Register scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (scroll) {
            const element = scroll?.el; // locomotive scrolling element, in out it's app (main)
            scroll.on('scroll', ScrollTrigger.update); // On scroll of locomotive, update scrolltrigger

            // Let's use scroller proxy
            ScrollTrigger.scrollerProxy(element, {
                scrollTop(value: any) {
                    return arguments.length
                        ? scroll.scrollTo(value, 0, 0)
                        : scroll.scroll.instance.scroll.y;
                }, // We don't have to define a scrollLeft because we're only scrolling vertically.

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

            return () => {
                ScrollTrigger.addEventListener('refresh', () => scroll?.update());
                ScrollTrigger.refresh();
            };
        }
    }, [scroll]);

    return null;
};

export default ScrollTriggerProxy;
