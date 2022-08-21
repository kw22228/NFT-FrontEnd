import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { navAtom, toastAtom, walletAtom } from '../../lib/recoil/atoms';

import connect from '../../lib/web3/connect';
import publicMint from '../../lib/web3/mintScript';

import * as s from './Mint.style';

import Block from '../../assets/images/block.svg';
import BlockWhite from '../../assets/images/block_white.svg';
import SmallFlag from '../../assets/images/smallFlag.svg';
import GreenFlag from '../../assets/images/greenFlag.svg';
import Ball from '../../assets/images/ball.svg';
import Character from '../../assets/images/frame.png';
import PinBall from '../../assets/images/pinball.svg';

const Mint = () => {
    const [currentBlock, setCurrentBlcok] = useState<number>(0);
    const setNavState = useSetRecoilState(navAtom);
    const [wallet, setWallet] = useRecoilState(walletAtom);
    const setToast = useSetRecoilState(toastAtom);

    useEffect(() => {
        setNavState('mint');
    }, []);

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
            setToast({
                msg: '지갑연동이 해제되었습니다.',
                visible: true,
            });
        } else {
            const result = await connect();
            if (result) {
                setWallet({
                    account: result.account,
                    balance: result.balance,
                });
                setToast({
                    msg: '지갑이 연동되었습니다.',
                    visible: true,
                });
            }
            return;
        }
    };

    return (
        <s.Section>
            <s.Container>
                <s.Left>
                    <svg viewBox="0 0 711 1043" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M634.365 2C321.783 58.0221 -222.416 200.77 101.442 323.583C506.263 477.1 962.626 805.707 540.791 1041"
                            stroke="#6CA33D"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeDasharray="25 25"
                        />
                        <defs>
                            <clipPath id="circleView">
                                <circle r="1500" />
                            </clipPath>
                        </defs>
                        <image
                            width="70"
                            height="100"
                            x="113"
                            y="210"
                            xlinkHref={GreenFlag}
                            clipPath="url(#circleView)"
                        />
                        <circle cx={134} cy={334} r={10} />
                        <image
                            width="70"
                            height="100"
                            x="490"
                            y="915"
                            xlinkHref={GreenFlag}
                            clipPath="url(#circleView)"
                        />
                        <circle cx={555} cy={1030} r={10} />

                        <image
                            width="100"
                            height="100"
                            x="50"
                            y="415"
                            xlinkHref={Ball}
                            clipPath="url(#circleView)"
                        />
                        <image
                            width="150"
                            height="150"
                            x="490"
                            y="715"
                            xlinkHref={Ball}
                            clipPath="url(#circleView)"
                        />
                    </svg>
                    <s.Character src={Character} />
                    <s.PinBall src={PinBall} />
                </s.Left>
                <s.Right>
                    <s.Title>Minting Block Number</s.Title>
                    <s.BlockInfoWrapper>
                        <s.BlockInfo>
                            <s.BlockTitle>Current Block</s.BlockTitle>
                            <s.BlockWrap>
                                <s.BlockImg src={Block} />
                                <s.BlockNumber type="current">#12345678</s.BlockNumber>
                            </s.BlockWrap>
                        </s.BlockInfo>
                        <s.BlockInfo>
                            <s.BlockTitle>Minting Block</s.BlockTitle>
                            <s.BlockWrap>
                                <s.BlockImg src={BlockWhite} />
                                <s.BlockNumber type="minting">#12345678</s.BlockNumber>
                            </s.BlockWrap>
                        </s.BlockInfo>
                    </s.BlockInfoWrapper>
                    <s.QuantityWrapper>
                        <s.Title>quantity & price</s.Title>
                        <s.QuantityContainer>
                            <s.Quantity>
                                <s.QuantityText>remaining nfts</s.QuantityText>
                                <s.QuantityNumber>5,000 / 5,000</s.QuantityNumber>
                            </s.Quantity>
                            <s.QuantityBar>
                                <s.QuantityProgress progress={60} />
                            </s.QuantityBar>
                        </s.QuantityContainer>
                        <s.QuantitySelectContainer>
                            <s.SelectInfoText>1 mint per 1 person</s.SelectInfoText>
                        </s.QuantitySelectContainer>

                        <s.Price>price : 0 klay</s.Price>
                    </s.QuantityWrapper>

                    <s.MintWrapper>
                        <s.MintButton onClick={handleConnectClick}>
                            {wallet?.account ? 'minting' : 'connect wallet'}
                            <s.MintFlag src={SmallFlag} />
                        </s.MintButton>
                        <s.MintButton onClick={handleClick}>MINTING 이거사용</s.MintButton>
                    </s.MintWrapper>
                </s.Right>
            </s.Container>
        </s.Section>
    );
};

export default Mint;
