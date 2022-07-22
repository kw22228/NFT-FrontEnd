import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Scroll } from 'react-locomotive-scroll';

interface IScroll {
    scroll: Scroll;
}
const ScrollTriggerProxy = () => {
    const { scroll: locoScroll }: IScroll = useLocomotiveScroll();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (locoScroll) {
            const scrollEl: HTMLElement = locoScroll?.el; // locomotive scrolling element, in out it's app (main)

            locoScroll.on('scroll', () => ScrollTrigger.update()); // On scroll of locomotive, update scrolltrigger

            ScrollTrigger.scrollerProxy(scrollEl, {
                scrollTop(value: number | undefined) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, 0, 0)
                        : locoScroll.scroll.instance.scroll.y;
                },
                scrollLeft(value: number | undefined) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, 0, 0)
                        : locoScroll.scroll.instance.scroll.x;
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
                pinType: scrollEl.style.transform ? 'transform' : 'fixed',
            });

            ScrollTrigger.defaults({
                scroller: scrollEl,
            });

            const isUpdate = () => {
                locoScroll.update();
            };
            ScrollTrigger.addEventListener('refresh', isUpdate);
            ScrollTrigger.refresh();

            return () => {
                ScrollTrigger.addEventListener('refresh', () => locoScroll?.update());
                ScrollTrigger.refresh();
            };
        }
    }, [locoScroll]);

    return null;
};

export default ScrollTriggerProxy;
