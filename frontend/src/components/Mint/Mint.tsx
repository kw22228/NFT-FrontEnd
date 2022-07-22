import React, { useEffect } from 'react';
import * as s from './Mint.style';

import { useSetRecoilState } from 'recoil';
import { navAtom } from '../../lib/recoil/atoms';
// import publicMint from '../../lib/web3/mintScript';

const Mint = () => {
    const setNavState = useSetRecoilState(navAtom);
    useEffect(() => {
        setNavState('mint');
    });

    const handleClick = () => {
        // publicMint();
        console.log(window.klaytn);
    };

    return (
        <s.Section>
            <s.Mint onClick={handleClick}>Minting</s.Mint>
        </s.Section>
    );
};

export default Mint;
