import React from 'react';
import * as s from './FixedBtn.style';
import Goxo from './Goxo/Goxo';

import ScrollToUp from './ScrollToUp/ScrollToUp';

const FixedBtn = () => {
    return (
        <s.Container data-scroll data-scroll-sticky data-scroll-target=".Main">
            <ScrollToUp />
            <Goxo />
        </s.Container>
    );
};

export default FixedBtn;
