import React from 'react';
import * as s from './Loader.style';

import FadeLoader from 'react-spinners/FadeLoader';

const Loader = () => {
    return (
        <s.Section>
            <s.Card>
                <FadeLoader color="#fff" height={15} width={5} radius={2} margin={2} />
                <s.Text>Loading...</s.Text>
            </s.Card>
        </s.Section>
    );
};

export default Loader;
