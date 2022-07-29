import BigNumber from 'bignumber.js';
import Caver, { AbiItem } from 'caver-js';
import { IWallet } from '../recoil/atoms/types';
import check_status from './check_status';
import { ABI, CONTRACTADDRESS } from '../../lib/web3/config';

const config = {
    rpcURL: 'https://api.baobab.klaytn.net:8651',
};
const caver = new Caver(config.rpcURL);
const cABI = new caver.klay.Contract(ABI as AbiItem[], CONTRACTADDRESS);

export default async function publicMint({ account, balance }: IWallet) {
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

    console.log(check_status);
    //console.log((await check_status()).myContract);
    //const amount = document.getElementById('amount') as HTMLInputElement;

    //await check_status();

    // if (maxSaleAmount + 1 <= mintIndexForSale) {
    //     alert('모든 물량이 소진되었습니다.');
    //     return;
    // } else if (blockNumber <= mintStartBlockNumber) {
    //     alert('아직 민팅이 시작되지 않았습니다.');
    //     return;
    // }
    // const total_value = new BigNumber(+amount * mintPrice);

    try {
        const gasAmount = await myContract.methods.publicMint().estimateGas({
            from: account,
            gas: 6000000,
            // value: total_value,
        });
        const result = await myContract.methods.publicMint().send({
            from: account,
            gas: gasAmount,
            // value: total_value,
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
