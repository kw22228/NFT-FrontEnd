import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import * as s from './Product.style';

import Flag from '../../../../assets/images/flag.svg';
import bg from '../../../../assets/images/main.jpg';
import { RoadMapVariants } from '../../../../lib/animation/framer-variants/inViewVariants';
import { useInView } from 'framer-motion';

interface IProduct {
    title: string;
    lists: string[];
    index: number;
    setPage: Dispatch<SetStateAction<number>>;
}
const Product = ({ title, lists, index, setPage }: IProduct) => {
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
        <s.ItemWrapper id={`itemSection${index}`}>
            <div id={`aDiv${index}`}></div>
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
                <s.Img src={bg} />
                <s.Title>{title}</s.Title>
                <s.Contents>
                    {lists.map((list, i) => (
                        <s.List key={list}>
                            <s.Flag src={Flag} />
                            {list}
                        </s.List>
                    ))}
                </s.Contents>
            </s.Item>
            <div //
                // style={{ backgroundColor: 'pink' }}
                id={`bDiv${index}`}
            ></div>
        </s.ItemWrapper>
    );
};

export default Product;
