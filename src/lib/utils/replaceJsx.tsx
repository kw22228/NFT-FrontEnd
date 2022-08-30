import React from 'react';

const replaceJsx = (from: string, to: JSX.Element, str: string): JSX.Element[] =>
    str.split(from).map((item, i) => (
        <React.Fragment key={i}>
            {item}
            {str.split(from).length - 1 !== i && to}
        </React.Fragment>
    ));
export default replaceJsx;
