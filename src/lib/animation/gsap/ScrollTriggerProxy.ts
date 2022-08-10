import React, { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IScroll } from '../../types/GsapTypes';
import throttle from '../../utils/throttle';
import { useSetRecoilState } from 'recoil';
import { scrollHeightAtom } from '../../recoil/atoms';

const ScrollTriggerProxy = () => {
    const { scroll }: IScroll = useLocomotiveScroll();
    const setScrollPosition = useSetRecoilState(scrollHeightAtom);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        setTimeout(() => {
            if (scroll) {
                const element = scroll.el as HTMLDivElement;

                const scrollPositionHandler = (position: any) => {
                    const scrollPosition = {
                        scrollHeight: position.limit.y,
                        currentY: position.scroll.y,
                        progressY: position.scroll.y / position.limit.y,
                        direction: position.direction,
                    };

                    setScrollPosition(scrollPosition);
                };
                const throttleHandler = throttle(scrollPositionHandler, 50);

                scroll.on('scroll', (position: any) => {
                    throttleHandler(position);
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

                const scrollRefresh = () => {
                    if (scroll) {
                        scroll.update();
                    }
                };
                ScrollTrigger.addEventListener('refreshInit', scrollRefresh);
                ScrollTrigger.refresh();

                return () => {
                    if (scroll) {
                        ScrollTrigger.addEventListener('refreshInit', scrollRefresh);
                        scroll.destroy();
                    }
                };
            }
        }, 0);
    }, [scroll]);
    return null;
};

export default ScrollTriggerProxy;
