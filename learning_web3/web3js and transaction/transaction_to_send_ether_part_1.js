const Tx = require('ethereumjs-tx')

var Web3 = require('web3') 
let url = 'https://ropsten.infura.io/v3/504ad6ffb5e54aadb635debbe0835954'
let web3 = new Web3(url) 

console.log(web3.eth.accounts.create())

console.log(web3.eth.accounts.create())

/* { address: '0x7Ff967911618385101deAe4D120fF359EbedC848',
  privateKey: '0x7aed89ec946d84911898fccc79df6076f9854c73c9dc5deeb3182de77444744c',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] }
{ address: '0x88BF8E10997fF72f5fd75103F8560D3c51C4Dcf6',
  privateKey: '0xc6a651e5518e33e162beeddfb7c3431c466b9c608ff53b4d05da4ce09401444d',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt] } */

  const account1 = '0x7Ff967911618385101deAe4D120fF359EbedC848'
  const privateKey1 = Buffer.from("0x7aed89ec946d84911898fccc79df6076f9854c73c9dc5deeb3182de77444744c")
  const account2 = '0x88BF8E10997fF72f5fd75103F8560D3c51C4Dcf6'

  web3.eth.getBalance(account1, (error, balance)=> {
    console.log('account 1 balance :', balance) 
  })


  web3.eth.getBalance(account2, (error, balance)=> {
    console.log('account 2 balance :', balance) 
  })