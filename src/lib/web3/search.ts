import BigNumber from 'bignumber.js';
import Caver, { AbiItem } from 'caver-js';
import check_status from './check_status';
import cntBlockNumber from './cntBlockNumber';
import { ABI, CONTRACTADDRESS } from '../../lib/web3/config';

export const config: { rpcURL: string } = {
    rpcURL: window.klaytn,
};
export const caver = new Caver(config.rpcURL);
let IndexForSearch = 0;

function search() {
    const myContract = new caver.klay.Contract(ABI as AbiItem[], CONTRACTADDRESS);
    myContract.methods.mintingInformation().call.then(function (result: string[]) {
        IndexForSearch = parseInt(result[1]);
    });
}
