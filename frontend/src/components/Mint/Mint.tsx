import React, { useEffect } from 'react';
import * as s from './Mint.style';

import { useSetRecoilState } from 'recoil';
import { navAtom } from '../../lib/recoil/atoms';
import publicMint from '../../lib/web3/mintScript';

import { CONTRACTADDRESS, ABI } from '../../lib/web3/config';

const Mint = () => {
    const setNavState = useSetRecoilState(navAtom);
    useEffect(() => {
        setNavState('mint');
    });

<<<<<<< HEAD
    const handleClick = () => {};
=======
    const handleClick = () => {
        publicMint();
    };
>>>>>>> root_origin/master

    return (
        <s.Section>
            <s.Mint onClick={handleClick}>Minting</s.Mint>
        </s.Section>
    );
};

export default Mint;
