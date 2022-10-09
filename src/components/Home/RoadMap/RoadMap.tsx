import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import GsapRoadMap from '../../../lib/animation/gsap/GsapRoadMap';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import Product from './Product/Product';
import * as s from './RoadMap.style';

import PerfactCar from '../../../assets/images/perfectCar.svg';
import RoadmapPin from '../../../assets/images/roadmap_pin.png';
import Grid from '../../../assets/images/roadmap_grid.png';
// import DownArrow from '../../../assets/images/down-arrow.png';
// import { jumpVariants } from '../../../lib/animation/framer-variants/actionVarinats';
import { IScroll } from '../../../lib/types/GsapTypes';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRecoilValue } from 'recoil';
import { scrollHeightAtom, windowInfoAtom } from '../../../lib/recoil/atoms';

import Gallaxy5 from '../../../assets/images/gallaxy5.png';

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

    // const skipClickHandler = () => {
    //     const element = document.querySelector('#team') as HTMLDivElement;
    //     scroll.scrollTo(element, {
    //         offset: '0',
    //         duration: '1500',
    //         easing: [0.25, 0.0, 0.35, 1.0],
    //         // disableLerp: false,
    //     });
    // };

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
            <s.Background>
                {/* <s.Gallaxy src={Gallaxy5} alt="Gallaxy5" /> */}
                {/* <s.Grid src={Grid} alt="grid" /> */}
            </s.Background>
            <s.Left ref={leftRef}>
                {/* <s.LeftTitle>RoadMap</s.LeftTitle> */}

                <s.CurveLine>
                    <svg
                        width="536"
                        height="1191"
                        viewBox="0 -120 550 1500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#05D3E5"
                        id="svg"
                    >
                        <defs>
                            <clipPath id="circleView">
                                <circle r="1500" />
                            </clipPath>
                        </defs>

                        <path
                            d="M315.5 5L43.4532 277.047C-22.6826 343.183 0.565828 455.422 87.5308 489.846L448.16 632.595C532.808 666.101 557.688 773.991 496.263 841.183L181.5 1185.5"
                            strokeWidth="10"
                            strokeLinecap="butt"
                            strokeLinejoin="bevel"
                            strokeDasharray="20,20"
                            id="path"
                        />
                        <image
                            width="70"
                            height="100"
                            x="288"
                            y="-100"
                            xlinkHref={RoadmapPin}
                            clipPath="url(#circleView)"
                            onClick={() => pageClickHandler(0)}
                        />
                        <image
                            width="70"
                            height="100"
                            x="105"
                            y="415"
                            xlinkHref={RoadmapPin}
                            clipPath="url(#circleView)"
                            onClick={() => pageClickHandler(1)}
                        />
                        <image
                            width="70"
                            height="100"
                            x="530"
                            y="680"
                            xlinkHref={RoadmapPin}
                            clipPath="url(#circleView)"
                            onClick={() => pageClickHandler(2)}
                        />
                        <image
                            width="70"
                            height="100"
                            x="140"
                            y="1100"
                            xlinkHref={RoadmapPin}
                            clipPath="url(#circleView)"
                            onClick={() => pageClickHandler(3)}
                        />
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
            {/* <s.Bottom //
                variants={jumpVariants}
                initial="normal"
                animate="action"
                onClick={skipClickHandler}
            >
                <span>Skip</span>
                <img src={DownArrow} alt="Scroll Down" />
            </s.Bottom> */}
        </s.Section>
    );
};

export default RoadMap;
