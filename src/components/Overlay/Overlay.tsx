import { useRecoilState } from 'recoil';
import { visibleAtom } from '../../lib/recoil/atoms';
import { IVisible } from '../../lib/recoil/atoms/types';

import * as s from './Overlay.style';

const Overlay = () => {
    const [visible, setVisible] = useRecoilState(visibleAtom);

    const handleClick = () => {
        setVisible(prev =>
            Object.keys(prev)
                .map(key => ({ [key]: false }))
                .reduce(
                    (acc: IVisible, cur: IVisible, idx: number): IVisible => ({
                        ...acc,
                        ...cur,
                    }),
                    {}
                )
        );
    };

    return (
        <>
            <s.Overlay //
                data-scroll
                data-scroll-sticky
                data-scroll-target=".Main"
                visible={visible.overlay}
                onClick={handleClick}
            />
        </>
    );
};

export default Overlay;
