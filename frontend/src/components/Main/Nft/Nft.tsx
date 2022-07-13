import React from 'react';
import * as s from './Nft.style';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const Nft = () => {
    return (
        <s.Section>
            <s.SliderContainer>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    speed={3000}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={7}
                    allowTouchMove={false}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
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
        </s.Section>
    );
};

export default Nft;
