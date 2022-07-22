import React, { useEffect } from 'react';
import * as s from './Mint.style';

import { useSetRecoilState } from 'recoil';
import { navAtom } from '../../lib/recoil/atoms';
const Mint = () => {
    const setNavState = useSetRecoilState(navAtom);
    useEffect(() => {
        setNavState('mint');
    });

    const handleClick = () => {};

    return (
        <s.Section>
            <s.Mint onClick={handleClick}>Minting</s.Mint>
        </s.Section>
    );
};

export default Mint;
