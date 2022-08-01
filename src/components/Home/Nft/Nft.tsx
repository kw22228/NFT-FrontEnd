import React, { useRef } from 'react';
import * as s from './Nft.style';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

import openSea from '../../../assets/images/OpenSea-icon.svg';
import { useInView } from 'framer-motion';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import importAll from '../../../lib/utils/importAll';

const Nft = () => {
    const SwiperConfig: SwiperProps = {
        speed: 3000,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        loop: true,
        slidesPerView: 5,
        watchSlidesProgress: true,
        spaceBetween: 27,
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
    useViewportNavState(isInview, 'nft');

    const images = importAll(require.context('../../../assets/nfts/', false, /.*\.png$/));
    return (
        <s.Section id="nft" ref={nftRef}>
            <s.Title>NFT</s.Title>
            <s.SliderContainer>
                <Swiper {...SwiperConfig} onInit={onInit}>
                    {images.map((image, index) => (
                        <SwiperSlide key={image}>
                            <s.Nft bg={image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </s.SliderContainer>
            <s.OpenSea>
                <img src={openSea} alt="openSea" />
                <span>Buy on OpenSea</span>
            </s.OpenSea>
        </s.Section>
    );
};

export default Nft;
