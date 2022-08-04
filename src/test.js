// test.js
const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');

async function testFunction() {
    const version = await caver.rpc.klay.getClientVersion();
    console.log(version);
}

testFunction();
