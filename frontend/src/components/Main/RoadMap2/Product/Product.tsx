import React, { useEffect, useRef, useState } from 'react';
import * as s from './Product.style';

import bg from '../../../../assets/images/main.jpg';
import { RoadMapVariants } from '../../../../lib/animation/variants/inViewVariant';
import { useInView } from 'framer-motion';

interface IProduct {
    title: string;
    content: string;
    index: number;
}

const Product = ({ title, content, index }: IProduct) => {
    const [page, setPage] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: false,
        amount: 0.6,
    });

    useEffect(() => {
        if (isInView) {
        }
    }, [isInView]);

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
