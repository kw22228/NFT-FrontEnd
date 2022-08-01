import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import Gallary from '../components/Gallary/Gallary';

const GallaryPage = () => {
    if (ScrollTrigger.getAll()) {
        ScrollTrigger.getAll().forEach((instance, index) => {
            instance.kill();
        });
    }
    return (
        <>
            <Gallary />
        </>
    );
};

export default GallaryPage;
