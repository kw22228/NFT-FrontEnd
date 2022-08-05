import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import Mint from '../components/Mint/Mint';

const MintPage = () => {
    if (ScrollTrigger.getAll()) {
        ScrollTrigger.getAll().forEach((instance, index) => {
            //header scroll은 냅두기
            if (index > 1) {
                instance.kill();
            }
        });
    }

    return (
        <>
            <Mint />
        </>
    );
};

export default MintPage;
