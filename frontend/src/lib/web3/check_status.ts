import Caver, { AbiItem } from 'caver-js';

import { ABI, CONTRACTADDRESS } from '../../lib/web3/config';
import { cntBlockNumber } from './cntBlockNumber';
const config = {
    rpcURL: 'https://api.baobab.klaytn.net:8651',
};

const caver = new Caver(config.rpcURL);
const cABI = new caver.klay.Contract(ABI as AbiItem[], CONTRACTADDRESS);

let mintIndexForSale = 0;
let maxSaleAmount = 0;
let mintPrice = 0;
let mintStartBlockNumber = 0;
let mintLimitPerBlock = 0;
let blockNumber = 0;

export default async function check_status() {
    const myContract = cABI;
    await myContract.methods
        .mintingInformation()
        .call()
        .then(function (result: string[]) {
            console.log(result);
            mintIndexForSale = parseInt(result[1]);
            mintLimitPerBlock = parseInt(result[2]);
            mintStartBlockNumber = parseInt(result[4]);
            maxSaleAmount = parseInt(result[5]);
            mintPrice = parseInt(result[6]);
            console.log(`${mintIndexForSale - 1} / ${maxSaleAmount}`);
            console.log(`트랜잭션당 최대 수량: ${mintLimitPerBlock}개`);
            console.log(`민팅 시작 블록: #${mintStartBlockNumber}`);
            console.log(`민팅 가격: ${caver.utils.fromPeb(mintPrice, 'KLAY')} KLAY`);
        })
        .catch((error: any) => {
            console.log(error);
        });
    blockNumber = await caver.klay.getBlockNumber();
    console.log('현재 블록: #' + blockNumber);
    cntBlockNumber();
}
