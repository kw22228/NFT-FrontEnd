import { caver } from './config';

let blockNumber = 0;
let blockCnt = false;

export default async function cntBlockNumber() {
    blockNumber = await caver.klay.getBlockNumber();
    if (!blockCnt) {
        setInterval(function () {
            blockNumber += 1;
            //document.getElementById('blockNmbmer').innerHTML = '현재 블록: #' + blockNumber;
            //console.log('현재 블록: #' + blockNumber);
        }, 1000);
        blockCnt = true;
    }
    return {
        blockNumber: '현재 블록: #' + blockNumber,
    };
}
