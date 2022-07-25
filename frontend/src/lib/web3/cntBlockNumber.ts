import Caver from 'caver-js';

const config = {
    rpcURL: 'https://api.baobab.klaytn.net:8651',
};
const caver = new Caver(config.rpcURL);

let blockNumber = 0;
let blockCnt = false;

async function cntBlockNumber() {
    blockNumber = await caver.klay.getBlockNumber();
    if (!blockCnt) {
        setInterval(function () {
            blockNumber += 1;
            //document.getElementById('blockNubmer').innerHTML = '현재 블록: #' + blockNumber;
            console.log('현재 블록: #' + blockNumber);
        }, 1000);
        blockCnt = true;
    }
}

export { cntBlockNumber };
