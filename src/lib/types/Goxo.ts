import { Dispatch, SetStateAction } from 'react';
import { IScrollHeight } from '../recoil/atoms/types';

export interface IContainer {
    img: string;
    title: string;
    x?: number;
    y?: number;
    width?: number;
    child?: boolean;
    setVisible?: Dispatch<SetStateAction<boolean>>;
}

export interface IGoxo {
    scrollHeight: IScrollHeight;
    percent: number;
}
