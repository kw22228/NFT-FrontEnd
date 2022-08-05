import React from 'react';
import * as s from './Goxo.style';

import Sing from '../../../assets/goxo_sing.jpg';

interface IContainer {
    img: string;
    title: string;
}

const Container = ({ img, title }: IContainer) => {
    return (
        <s.Container>
            <s.CircleImage bg={img} />
            <s.Title>{title}</s.Title>
        </s.Container>
    );
};

const Goxo = () => {
    return (
        <s.Wrapper>
            <Container img={Sing} title="Goxo Shop" />
        </s.Wrapper>
    );
};

export default Goxo;
