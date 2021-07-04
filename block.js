const { Blockchain, Transaction} = require("./blockchain")
//const Blockchain = require('./blockchain.js');
//const Transaction = require('./blockchain.js');

let block1 = new Blockchain();

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('88f77c7ca77b3b669bdea988e91cf49843d06af40890a8e1e1808451e5dbb3d0');
const myWalletAddress = myKey.getPublic('hex');

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 20);
tx1.signTransaction(myKey);
block1.addTransaction(tx1);
//block1.createTransaction(new Transaction('address1', 'address2',100));
//block1.createTransaction(new Transaction('address1', 'address2',50));
console.log('\n Starting the miner...');
block1.minePendingTransactions(myWalletAddress);
console.log('\nBalance of anton is', block1.getBalanceofAddress(myWalletAddress));


//console.log('\n Starting the miner again...');
//block1.minePendingTransactions(myWalletAddress);
//console.log('\nBalance of miner is', block1.getBalanceofAddress(myWalletAddress));
//console.log('Mining block 1...');
//block1.addBlock(new Block(1, "01/01/2021", { amount: 4}));
//console.log('Mining block 2...');
//block1.addBlock(new Block(2, "12/01/2021", { amount: 10}));



//console.log('Is blockchain valid? ' + block1.isChainValid());

//console.log(JSON.stringify(block1,null, 4));
