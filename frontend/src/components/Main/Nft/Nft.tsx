import React, { useRef } from 'react';
import * as s from './Nft.style';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

import openSea from '../../../assets/images/OpenSea-icon.svg';
import useViewportNavState from '../../../lib/hooks/useViewportNavState';
import { useInView } from 'framer-motion';

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

    return (
        <s.Section id="nft" ref={nftRef}>
            <s.Title>NFT</s.Title>
            <s.SliderContainer>
                <Swiper {...SwiperConfig} onInit={onInit}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                    <SwiperSlide>Slide 10</SwiperSlide>
                    <SwiperSlide>Slide 11</SwiperSlide>
                    <SwiperSlide>Slide 12</SwiperSlide>
                    <SwiperSlide>Slide 13</SwiperSlide>
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
