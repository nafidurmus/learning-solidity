let Web3 = require('web3') // npm install web3 i kurmak için 
//ganache local blockchain
let url_ganache ='http://127.0.0.1:7545' //ganache serverdaki rpc server

//infura
let url_infura = 'https://mainnet.infura.io/v3/cbaafc4d284d4c5a8c0eb12424332fa3'

//using geth
let url_geth = 'http://127.0.0.1:8545'

//let web3 = new Web3(url_ganache)
//let web3 = new Web3(url_infura) // geth --rinkeby --rpc
let web3 = new Web3(url_geth) //geth url 
 

console.log(web3)