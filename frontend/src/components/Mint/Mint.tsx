import React, { useEffect } from 'react';
import * as s from './Mint.style';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { navAtom, walletAtom } from '../../lib/recoil/atoms';
import publicMint from '../../lib/web3/mintScript';
import connect from '../../lib/web3/connect';

const Mint = () => {
    const setNavState = useSetRecoilState(navAtom);
    const [wallet, setWallet] = useRecoilState(walletAtom);

    useEffect(() => {
        setNavState('mint');
    });

    const handleClick = () => {
        if (wallet?.account) {
            publicMint(wallet);
        }
    };

    const handleConnectClick = async (): Promise<void> => {
        if (wallet?.account) {
            //disconnect
            setWallet({
                account: '',
                balance: '',
            });

            console.log('Disconnect.');
        } else {
            const result = await connect();

            if (result) {
                setWallet({
                    account: result.account,
                    balance: result.balance,
                });
            }

            console.log('Connect !!');
        }
    };

    return (
        <s.Section>
            <s.BoxContainer>
                <s.Box>
                    11111111111111111111
                    <br />
                    11111111111111111111
                    <br />
                    11111111111111111111
                    <br />
                    11111111111111111111
                    <br />
                    11111111111111111111
                    <br />
                    11111111111111111111
                    <br />
                </s.Box>
                <s.Box>블록</s.Box>
            </s.BoxContainer>
            <s.MintContainer>
                <s.Mint onClick={handleClick}>Minting</s.Mint>
                <s.Mint onClick={handleConnectClick}>
                    {wallet?.account ? wallet.account : 'Connect Wallet'}
                </s.Mint>
            </s.MintContainer>
        </s.Section>
    );
};

export default Mint;
