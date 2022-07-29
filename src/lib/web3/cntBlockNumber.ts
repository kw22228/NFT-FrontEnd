import { caver } from './config';

let blockNumber = 0;

export default async function cntBlockNumber() {
    blockNumber = await caver.klay.getBlockNumber();
    return {
        blockNumber,
    };
}
