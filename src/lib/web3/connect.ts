import check_status from '../../lib/web3/check_status';
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

    // caver.klay.getBalance(account)
    //     .then(function (balance) {
    //         document.getElementById("myWallet").innerHTML = `지갑주소: ${account}`
    //         document.getElementById("myKlay").innerHTML = `잔액: ${caver.utils.fromPeb(balance, "KLAY")} KLAY`
    //     });

    //document.getElementById('myWallet').innerHTML = `지갑주소: ${account}`;
    // console.log(`지갑 주소: ${account}`);
    //document.getElementById('myKlay').innerHTML = `잔액: ${caver.utils.fromPeb(balance,'KLAY')} KLAY`;
    // console.log(`잔액: ${caver.utils.fromPeb(balance, 'KLAY')}`);

    //await check_status(); //옮기기
    return {
        account: account,
        balance: caver.utils.fromPeb(balance, config.token),
    };
};

export default connect;
