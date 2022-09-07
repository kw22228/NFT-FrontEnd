import React, { useRef } from 'react';
import * as s from './Nft.style';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

import openSea from '../../../assets/images/OpenSea-icon.svg';
import { useInView } from 'framer-motion';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import importAll from '../../../lib/utils/importAll';
import { useRecoilValue } from 'recoil';
import { windowInfoAtom } from '../../../lib/recoil/atoms';
import { bottomToTop } from '../../../lib/animation/framer-variants/revealVariants';

const Nft = () => {
    const { width: windowWidth } = useRecoilValue(windowInfoAtom);
    let SLIDE_COUNT = 5;

    if (windowWidth < 550) {
        SLIDE_COUNT = 1.5;
    } else if (windowWidth < 768) {
        SLIDE_COUNT = 3;
    } else if (windowWidth < 1024) {
        SLIDE_COUNT = 4;
    }

    const SwiperConfig: SwiperProps = {
        speed: 3000,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        loop: true,
        slidesPerView: SLIDE_COUNT,
        centeredSlides: true,
        // watchSlidesProgress: true,
        spaceBetween: 10,
        grabCursor: true,
    };
    SwiperCore.use([Autoplay]);

    const swiperRef = useRef<SwiperCore>();
    const onInit = (Swiper: SwiperCore): void => {
        swiperRef.current = Swiper;
    };

    const nftRef = useRef<HTMLElement>(null);
    const isInview = useInView(nftRef, {
        once: false,
        amount: 0.8,
    });
    useViewportNavState(isInview, 'about');

    const images = importAll(require.context('../../../assets/nfts/', false, /.*\.png$/));

    return (
        <s.Section id="about" ref={nftRef}>
            {/* <s.Title>NFT</s.Title> */}

            <s.OpenSea //
                variants={bottomToTop}
                initial="initial"
                whileInView="onViewport"
                viewport={{
                    margin: '100px',
                    once: true,
                    amount: 0.3,
                }}
            >
                <img src={openSea} alt="openSea" />
                <span>Buy on OpenSea</span>
            </s.OpenSea>

            <s.SliderContainer
                count={SLIDE_COUNT} //
                variants={bottomToTop}
                initial="initial"
                whileInView="onViewport"
                viewport={{
                    margin: '100px',
                    once: true,
                    amount: 0.3,
                }}
            >
                <Swiper {...SwiperConfig} onInit={onInit}>
                    {images.map((image, index) => (
                        <SwiperSlide key={image}>
                            <s.Nft bg={image} count={SLIDE_COUNT} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </s.SliderContainer>
        </s.Section>
    );
};

export default Nft;
