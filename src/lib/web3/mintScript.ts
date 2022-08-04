import BigNumber from 'bignumber.js';
import Caver, { AbiItem } from 'caver-js';
import { IWallet } from '../recoil/atoms/types';
import check_status from './check_status';
import cntBlockNumber from './cntBlockNumber';
import { ABI, CONTRACTADDRESS } from '../../lib/web3/config';
import connect from './connect';
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

    console.log((await check_status()).mintPrice);
    console.log((await check_status()).mintIndexForSale);

    //console.log((await check_status()).myContract);
    //const amount = document.getElementById('amount') as HTMLInputElement;

    //await check_status();

    if ((await check_status()).maxSaleAmount + 1 <= (await check_status()).mintIndexForSale) {
        alert('모든 물량이 소진되었습니다.');
        return;
    } else if (
        (await cntBlockNumber()).blockNumber <= (await check_status()).mintStartBlockNumber
    ) {
        alert('아직 민팅이 시작되지 않았습니다.');
        return;
    }
    console.log(publicMint);

    const total_value = new BigNumber(1 * (await check_status()).mintPrice); // 민팅 수량 선택 (amount)
    // try {
    //     const gasAmount = await myContract.methods.publicMint(1).estimateGas({
    //         from: account,
    //         gas: 6000000,
    //         value: total_value,
    //     });
    const tx_result = await myContract.methods

        .publicMint(1)
        .send({
            from: account,
            gas: 6000000,
            value: total_value,
        })
        .then((receipt: any) => {
            console.log(receipt);
        })
        .catch((error: any) => {
            console.log(error);
        });
    // if (tx_result != null) {
    //     console.log(tx_result);
    //     alert('민팅에 성공하였습니다.');
    // }
    // } catch (error) {
    //     console.log(error);
    //     alert('민팅에 실패하였습니다.');
    // }
}
