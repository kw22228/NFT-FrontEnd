import React, { useEffect } from 'react';
import * as s from './Mint.style';

import { useSetRecoilState } from 'recoil';
import { navAtom } from '../../lib/recoil/atoms';
import { publicMint } from '../../lib/web3/mintScript';
import { connect } from '../../lib/web3/connect';

const Mint = () => {
    const setNavState = useSetRecoilState(navAtom);
    useEffect(() => {
        setNavState('mint');
    });

    const handleClick = () => {
        publicMint();
    };

    const handleConnectClick = () => {
        connect();
    };

    return (
        <s.Section>
            <s.Mint onClick={handleClick}>Minting</s.Mint>
            <s.Mint onClick={handleConnectClick}>Connect Wallet</s.Mint>
        </s.Section>
    );
};

export default Mint;
