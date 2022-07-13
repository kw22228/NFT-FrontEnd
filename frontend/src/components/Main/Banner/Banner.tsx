import React from 'react';
import * as s from './Banner.style';

import waves from '../../../assets/images/waves.svg';

const Banner = () => {
    return (
        <s.Section>
            Banner Image
            <s.Wave src={waves} alt="waves" />
        </s.Section>
    );
};

export default Banner;
