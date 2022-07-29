import React from 'react';
import * as s from './Product.style';

import bg from '../../../../assets/images/main.jpg';
import { RoadMapVariants } from '../../../../lib/animation/framer-variants/inViewVariants';

interface IProduct {
    title: string;
    content: string;
    index: number;
}
const Product = ({ title, content, index }: IProduct) => {
    return (
        <s.ItemWrapper>
            <div></div>
            <s.Item //
                bg={bg}
                variants={RoadMapVariants}
                initial="initial"
                whileInView="onViewport"
                viewport={{
                    once: false,
                    amount: 0.6,
                }}
            >
                <s.Title>{title}</s.Title>
                <s.Content>{content}</s.Content>
            </s.Item>
            <div></div>
        </s.ItemWrapper>
    );
};

export default Product;
