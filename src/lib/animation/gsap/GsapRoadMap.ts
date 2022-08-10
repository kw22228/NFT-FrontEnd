import { time } from 'console';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { globalWidthAtom } from '../../recoil/atoms';
import { IGsapProps } from '../../types/GsapTypes';

const GsapRoadMap = ({ sectionRef, scrollRef, ballRef }: IGsapProps) => {
    const globalWidth = useRecoilValue(globalWidthAtom);

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    useLayoutEffect(() => {
        if (ScrollTrigger.getAll()) {
            ScrollTrigger.getAll().forEach((instance, index) => instance.kill());
        }

        const sectionEl = sectionRef.current as HTMLDivElement;
        const scrollEl = scrollRef.current as HTMLDivElement;

        const pinWrapWidth = scrollEl.offsetWidth;
        const scrollWidth = globalWidth.width;
        const x = -pinWrapWidth + scrollWidth;

        // const lineEl = lineRef.current as HTMLDivElement;
        const ballEl = ballRef.current as HTMLDivElement;

        // const lineHeight = lineEl.clientHeight;
        // const ballProgress = lineHeight / pinWrapWidth;

        const tl = gsap.timeline();

        const timeout = setTimeout(() => {
            tl.to(sectionEl, {
                height: `${scrollEl.scrollWidth}px`,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionEl,
                    start: 'top top',
                    end: pinWrapWidth,
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(ballEl, {
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionEl,
                    start: 'top top',
                    end: pinWrapWidth,
                    scrub: true,
                },
                motionPath: {
                    path: '#path',
                    align: '#path',
                    autoRotate: false,
                    alignOrigin: [0.5, 0.5],
                },
            });

            tl.to(scrollEl, {
                x: x,
                ease: 'none',
                scrollTrigger: {
                    trigger: scrollEl,
                    start: 'top top',
                    end: pinWrapWidth,
                    scrub: true,

                    onUpdate: self => {
                        // const progress = 100 - Math.floor(self.progress * 100);
                        // ballEl.style.bottom = progress + '%';
                    },
                },
            });

            ScrollTrigger.refresh();
        }, 100);

        return () => {
            tl.kill();
            ScrollTrigger.refresh();
            clearInterval(timeout);
        };
    }, [globalWidth.width]);
};

export default GsapRoadMap;
