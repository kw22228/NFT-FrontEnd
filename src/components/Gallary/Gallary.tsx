import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { navAtom } from '../../lib/recoil/atoms';
import All from './All/All';
import * as s from './Gallary.style';
import MyNft from './MyNft/MyNft';

interface IParams {
    type: string;
}
const Gallary = () => {
    const setNavState = useSetRecoilState(navAtom);
    const { type } = useParams<keyof IParams>() as IParams;

    useEffect(() => {
        setNavState('gallary');
    }, [type]);

    return (
        <s.Section>
            <s.Container>
                <s.Title>Gallary</s.Title>
                <s.Selector>
                    <s.Switch to="/gallary/all" type={type} match="all">
                        ALL
                    </s.Switch>
                    <s.Switch to="/gallary/my" type={type} match="my">
                        MY NFT
                    </s.Switch>
                </s.Selector>

                <s.ViewContainer>{type !== 'all' ? <MyNft /> : <All />}</s.ViewContainer>
            </s.Container>
        </s.Section>
    );
};

export default Gallary;
