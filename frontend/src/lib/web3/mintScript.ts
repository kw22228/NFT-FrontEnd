import BigNumber from 'bignumber.js';
import Caver, { AbiItem } from 'caver-js';
import { check_status } from './check_status';

import { ABI, CONTRACTADDRESS } from '../../lib/web3/config';
const config = {
    rpcURL: 'https://api.baobab.klaytn.net:8651',
};

const caver = new Caver(config.rpcURL);
const cABI = new caver.klay.Contract(ABI as AbiItem[], CONTRACTADDRESS);

let account: string;
let mintIndexForSale = 0;
let maxSaleAmount = 0;
let mintPrice = 0;
let mintStartBlockNumber = 0;
let blockNumber = 0;

async function publicMint() {
    if (window.klaytn.networkVersion === 8217) {
        console.log('메인넷');
    } else if (window.klaytn.networkVersion === 1001) {
        console.log('테스트넷');
    } else {
        alert('ERROR: 클레이튼 네트워크로 연결되지 않았습니다!');
        return;
    }
    if (!account) {
        alert('ERROR: 지갑을 연결해주세요!');
        return;
    }

    const myContract = cABI;
    const amount = console.log('${value}');
    await check_status();
    if (maxSaleAmount + 1 <= mintIndexForSale) {
        alert('모든 물량이 소진되었습니다.');
        return;
    } else if (blockNumber <= mintStartBlockNumber) {
        alert('아직 민팅이 시작되지 않았습니다.');
        return;
    }
    const total_value = new BigNumber(+amount * mintPrice);

    try {
        const gasAmount = await myContract.methods.publicMint(amount).estimateGas({
            from: account,
            gas: 6000000,
            value: total_value,
        });
        const result = await myContract.methods.publicMint(amount).send({
            from: account,
            gas: gasAmount,
            value: total_value,
        });
        if (result != null) {
            console.log(result);
            alert('민팅에 성공하였습니다.');
        }
    } catch (error) {
        console.log(error);
        alert('민팅에 실패하였습니다.');
    }
}

export { publicMint };
