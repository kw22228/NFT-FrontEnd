import React from 'react';
import * as s from './All.style';

import Ex from '../../../assets/nfts/1.png';

const Item = ({ img, hash }: { img: string; hash: string }) => {
    return (
        <s.Card>
            <s.ImgContainer bg={img} />
            <s.HashContainer>
                <s.Hash>{hash}</s.Hash>
            </s.HashContainer>
        </s.Card>
    );
};
const All = () => {
    return (
        <s.Wrapper>
            <s.Left>
                <s.LeftItems>
                    <s.BigCategory>Background</s.BigCategory>
                </s.LeftItems>
                <s.LeftItems>
                    <s.BigCategory>body</s.BigCategory>
                </s.LeftItems>
                <s.LeftItems>
                    <s.BigCategory>hands</s.BigCategory>
                </s.LeftItems>
                <s.LeftItems>
                    <s.BigCategory>eyes</s.BigCategory>
                </s.LeftItems>
                <s.LeftItems>
                    <s.BigCategory>clothes</s.BigCategory>
                </s.LeftItems>
                <s.LeftItems>
                    <s.BigCategory>hat</s.BigCategory>
                </s.LeftItems>
            </s.Left>
            <s.Right>
                <s.Options>
                    <s.Count>0 items</s.Count>
                    <s.Search type="onkeyup" />
                </s.Options>
                <s.Gallary>
                    <Item img={Ex} hash="#7476" />
                    <Item img={Ex} hash="#7476" />
                    <Item img={Ex} hash="#7476" />
                    <Item img={Ex} hash="#7476" />
                    <Item img={Ex} hash="#7476" />
                </s.Gallary>
            </s.Right>
        </s.Wrapper>
    );
};

export default All;
