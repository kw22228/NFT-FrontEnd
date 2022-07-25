import Caver from 'caver-js';
import { check_status } from '../../lib/web3/mintScript';

const config = {
    rpcURL: 'https://api.baobab.klaytn.net:8651',
};

const caver = new Caver(config.rpcURL);

async function connect() {
    const accounts = await window.klaytn.enable();
    if (window.klaytn.networkVersion === 8217) {
        console.log('메인넷');
    } else if (window.klaytn.networkVersion === 1001) {
        console.log('테스트넷');
    } else {
        alert('ERROR: 클레이튼 네트워크로 연결되지 않았습니다!');
        return;
    }
    let account = accounts[0];
    caver.klay.getBalance(account).then(function (balance) {
        //document.getElementById('myWallet').innerHTML = `지갑주소: ${account}`;
        console.log(`지갑 주소: ${account}`);
        //document.getElementById('myKlay').innerHTML = `잔액: ${caver.utils.fromPeb(balance,'KLAY')} KLAY`;
        console.log(`잔액: ${caver.utils.fromPeb(balance, 'KLAY')}`);
    });
    await check_status();
}

export { connect };
