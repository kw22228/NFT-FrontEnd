import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { toastAtom } from '../../../lib/recoil/atoms';
import * as s from './Toast.style';

const Toast = () => {
    const [toast, setToast] = useRecoilState(toastAtom);
    let timeout: any = null;

    const handleClick = () => {
        setToast(prev => ({
            ...prev,
            visible: false,
        }));

        if (timeout) {
            clearTimeout(timeout);
        }
    };

    useEffect(() => {
        if (toast.visible) {
            timeout = setTimeout(() => {
                setToast(prev => ({
                    ...prev,
                    visible: false,
                }));
            }, 3000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [toast.visible]);

    return (
        <s.Container //
            data-scroll
            data-scroll-sticky
            data-scroll-target=".Main"
            visible={toast.visible}
            onClick={handleClick}
        >
            <s.Text>{toast.msg}</s.Text>
            {/* <s.Cancle /> */}
        </s.Container>
    );
};

export default Toast;
