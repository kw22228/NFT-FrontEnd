import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import GsapRoadMap from '../../../lib/animation/gsap/GsapRoadMap';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import importAll from '../../../lib/utils/importAll';
import Product from './Product/Product';
import * as s from './RoadMap.style';

import PerfactCar from '../../../assets/images/perfectCar.svg';
import Flag from '../../../assets/images/flag.svg';
import DownArrow from '../../../assets/images/down-arrow.png';
import { jumpVariants } from '../../../lib/animation/framer-variants/actionVarinats';
import { IScroll } from '../../../lib/types/GsapTypes';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRecoilValue } from 'recoil';
import { scrollHeightAtom, windowInfoAtom } from '../../../lib/recoil/atoms';
import items from './item';

const RoadMap = () => {
    const { scroll }: IScroll = useLocomotiveScroll();
    const scrollHeight = useRecoilValue(scrollHeightAtom);
    const windowInfo = useRecoilValue(windowInfoAtom);

    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.7,
    });

    useViewportNavState(isInView, 'roadmap');
    GsapRoadMap({ sectionRef, scrollRef, ballRef });

    const skipClickHandler = () => {
        const element = document.querySelector('#team') as HTMLDivElement;
        scroll.scrollTo(element, {
            offset: '0',
            duration: '1500',
            easing: [0.25, 0.0, 0.35, 1.0],
            // disableLerp: false,
        });
    };

    const pageClickHandler = (id: number) => {
        const bannerHeight = document.querySelector('#banner')?.scrollHeight as number;
        const aboutHeight = document.querySelector('#about')?.scrollHeight as number;
        const homeHeight = document.querySelector('#home')?.scrollHeight as number;
        const storyHeight = document.querySelector('#story')?.scrollHeight as number;

        const footerHeight = document.querySelector('#footer')?.scrollHeight as number;
        const roadmapSection = sectionRef.current as HTMLDivElement;

        const startScroll = bannerHeight + homeHeight + aboutHeight + storyHeight;
        const endScroll = scrollHeight.scrollHeight - footerHeight - roadmapSection.scrollHeight;
        const itemScroll = (endScroll - startScroll) / (items.length - 1);
        let targetHeight = startScroll + itemScroll * id;
        if (id === 1) {
            targetHeight += 60 / windowInfo.zoomLevel;
        }
        scroll.scrollTo(targetHeight, {
            offset: '0',
            duration: '1500',
            easing: [0.25, 0.0, 0.35, 1.0],
            // disableLerp: false,
        });
    };

    return (
        <s.Section ref={sectionRef} className="roadmap" id="roadmap">
            <s.Left ref={leftRef}>
                <s.LeftTitle>RoadMap</s.LeftTitle>

                <s.CurveLine>
                    <svg
                        width="536"
                        height="1191"
                        viewBox="0 -120 550 1500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        id="svg"
                    >
                        <defs>
                            <clipPath id="circleView">
                                <circle r="1500" />
                            </clipPath>
                        </defs>

                        <path
                            d="M315.5 5L43.4532 277.047C-22.6826 343.183 0.565828 455.422 87.5308 489.846L448.16 632.595C532.808 666.101 557.688 773.991 496.263 841.183L181.5 1185.5"
                            stroke="#fff"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeLinejoin="bevel"
                            id="path"
                        />
                        <image
                            width="70"
                            height="100"
                            x="305"
                            y="-100"
                            xlinkHref={Flag}
                            clipPath="url(#circleView)"
                            onClick={() => pageClickHandler(0)}
                        />
                        <image
                            width="70"
                            height="100"
                            x="105"
                            y="390"
                            xlinkHref={Flag}
                            clipPath="url(#circleView)"
                            onClick={() => pageClickHandler(1)}
                        />
                        <image
                            width="70"
                            height="100"
                            x="530"
                            y="680"
                            xlinkHref={Flag}
                            clipPath="url(#circleView)"
                            onClick={() => pageClickHandler(2)}
                        />
                        <image
                            width="70"
                            height="100"
                            x="165"
                            y="1090"
                            xlinkHref={Flag}
                            clipPath="url(#circleView)"
                            onClick={() => pageClickHandler(3)}
                        />

                        <text x="335" y="-65">
                            1
                        </text>
                        <text x="135" y="425">
                            2
                        </text>
                        <text x="558" y="713">
                            3
                        </text>
                        <text x="195" y="1123">
                            4
                        </text>
                    </svg>
                    <s.CarImg ref={ballRef}>
                        <s.Car src={PerfactCar} bg={PerfactCar} />
                    </s.CarImg>
                </s.CurveLine>
            </s.Left>
            <s.Right ref={scrollRef} {...windowInfo}>
                {items.map((item, i) => (
                    <Product {...item} index={i} key={i} />
                ))}
            </s.Right>
            <s.Bottom //
                variants={jumpVariants}
                initial="normal"
                animate="action"
                onClick={skipClickHandler}
            >
                <span>Skip</span>
                <img src={DownArrow} alt="Scroll Down" />
            </s.Bottom>
        </s.Section>
    );
};

export default RoadMap;
