import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import * as s from './Product.style';

import bg from '../../../../assets/images/main.jpg';
import { RoadMapVariants } from '../../../../lib/animation/framer-variants/inViewVariants';
import { useInView } from 'framer-motion';

interface IProduct {
    title: string;
    content: string;
    index: number;
    setPage: Dispatch<SetStateAction<number>>;
}
const Product = ({ title, content, index, setPage }: IProduct) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: false,
        amount: 'all',
    });

    useEffect(() => {
        if (isInView) {
            setPage(index);
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
                ref={ref}
                id={`product${index}`}
            >
                <s.Title>{title}</s.Title>
                <s.Content>{content}</s.Content>
            </s.Item>
            <div></div>
        </s.ItemWrapper>
    );
};

export default Product;
