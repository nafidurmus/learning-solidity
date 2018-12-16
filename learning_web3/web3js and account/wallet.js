let Web3 = require('web3') 
let url_infura = 'https://mainnet.infura.io/v3/cbaafc4d284d4c5a8c0eb12424332fa3'
let web3 = new Web3(url_infura) 


let wallet = web3.eth.accounts.wallet.create(2,'some random string')

let account = web3.eth.accounts.create()

wallet.add(account.privateKey)

console.log(wallet)
//console.log(wallet[0])

// https://web3js.readthedocs.io/en/1.0/