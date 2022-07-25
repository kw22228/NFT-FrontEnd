let blockNumber = 0;
let blockCnt = false;

function cntBlockNumber() {
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
