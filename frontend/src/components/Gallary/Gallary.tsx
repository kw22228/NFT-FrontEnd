import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { navAtom } from '../../lib/recoil/atoms';
import * as s from './Gallary.style';

const Gallary = () => {
    const setNavState = useSetRecoilState(navAtom);
    useEffect(() => {
        setNavState('gallary');
    });

    return <s.Section>Gallary</s.Section>;
};

export default Gallary;
