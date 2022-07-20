import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IGsapProps } from '../../types/GsapTypes';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

const GsapRoadMap = ({ lineRef, ballRef }: IGsapProps) => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    useLayoutEffect(() => {
        const element = lineRef.current;
        const length = element?.offsetHeight as number;

        const pulse = gsap.timeline({
            defaults: {
                scale: 2,
                autoAlpha: 1,
                transformOrigin: 'center',
                ease: 'elastic(2.5, 1)',
            },
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top-=30% top',
                end: 'bottom bottom',
                markers: true,
                onUpdate: (self: any) => {
                    const draw = length * self.progress;
                    if (element !== null) {
                        element.style.visibility = 'visible';
                        element.style.height = `${draw}px`;
                    }
                },
                onToggle: (self: any) => {
                    if (!self.isActive) {
                        if (ballRef.current != null) {
                            ballRef.current.style.visibility = 'hidden';
                        }
                    } else if (self.isActive) {
                        if (ballRef.current != null) {
                            ballRef.current.style.visibility = 'visible';
                        }
                    }
                },
            },
        });

        // revealRef.current.forEach((el, index) => {
        //     tl.fromTo(
        //         el,
        //         {
        //             y: 300,
        //             opacity: 0,
        //         },
        //         {
        //             y: 0,
        //             opacity: 1,
        //             scrollTrigger: {
        //                 trigger: el,
        //                 start: 'top-=450 center',
        //                 end: 'bottom-=450 center',
        //                 scrub: true,
        //             },
        //         }
        //     );
        // });
        return () => {
            tl.kill();
        };
    }, []);
};

export default GsapRoadMap;
