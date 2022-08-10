import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { navAtom, walletAtom } from '../../lib/recoil/atoms';

import cntBlockNumber from '../../lib/web3/cntBlockNumber';
import connect from '../../lib/web3/connect';
import publicMint from '../../lib/web3/mintScript';
import FixedBtn from '../FixedBtn/FixedBtn';

import * as s from './Mint.style';

const Mint = () => {
    const [currentBlock, setCurrentBlcok] = useState<number>(0);
    const [navState, setNavState] = useRecoilState(navAtom);
    const [wallet, setWallet] = useRecoilState(walletAtom);

    useEffect(() => {
        setNavState('mint');
    }, [navState]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         (async () => {
    //             const result = (await cntBlockNumber()).blockNumber;
    //             setCurrentBlcok(result);
    //         })();
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [currentBlock]);

    const handleClick = () => {
        if (wallet?.account) {
            publicMint();
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
            return;
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
                <s.Box>{currentBlock}</s.Box>
            </s.BoxContainer>
            <s.MintContainer>
                <s.Mint onClick={handleClick}>MINT</s.Mint>
                <s.Mint onClick={handleConnectClick}>
                    {wallet?.account ? wallet.account : 'Connect Wallet'}
                </s.Mint>
            </s.MintContainer>
        </s.Section>
    );
};

export default Mint;
