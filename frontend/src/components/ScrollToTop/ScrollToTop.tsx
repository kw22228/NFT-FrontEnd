import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface IProps {
    children?: JSX.Element | JSX.Element[];
}
const ScrollToTop = ({ children }: IProps) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
};

export default ScrollToTop;
