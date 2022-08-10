export interface INavState {
    navState: string;
}

export interface IScrollHeight {
    scrollHeight: number;
    currentY: number;
    progressY: number;
    direction: 'down' | 'up' | null;
}

export interface IWallet {
    account: string;
    balance: string;
}

export interface IVisible {
    [key: string]: boolean;
}
