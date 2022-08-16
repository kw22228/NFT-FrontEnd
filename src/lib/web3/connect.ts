import { IWallet } from '../recoil/atoms/types';
import { config, caver } from './config';

const connect = async (): Promise<IWallet | null> => {
    const accounts = await window.klaytn.enable();

    if (window.klaytn.networkVersion === 8217) {
        console.log('메인넷');
    } else if (window.klaytn.networkVersion === 1001) {
        console.log('테스트넷');
    } else {
        alert('ERROR: 클레이튼 네트워크로 연결되지 않았습니다!');
        return null;
    }

    let account = accounts[0] as string;
    const balance = await caver.klay.getBalance(account);

    return {
        account: account,
        balance: caver.utils.fromPeb(balance, config.token),
    };
};

export default connect;
