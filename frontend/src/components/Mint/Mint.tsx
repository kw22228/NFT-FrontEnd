import React from 'react';
import * as s from './Mint.style';

import connect from '../../lib/web3/connect';
const Mint = () => {
    const handleClick = () => {
        connect();
    };

    return (
        <s.Section>
            <s.Mint onClick={handleClick}>Minting</s.Mint>
        </s.Section>
    );
};

export default Mint;
