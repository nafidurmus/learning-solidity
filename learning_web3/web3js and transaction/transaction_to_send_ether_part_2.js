const Tx = require('ethereumjs-tx')

var Web3 = require('web3') 
let url = 'https://ropsten.infura.io/v3/504ad6ffb5e54aadb635debbe0835954'
let web3 = new Web3(url) 


const account1 = '0x7Ff967911618385101deAe4D120fF359EbedC848'
const privateKey1 = Buffer.from("0x7aed89ec946d84911898fccc79df6076f9854c73c9dc5deeb3182de77444744c", "hex")
const account2 = '0x88BF8E10997fF72f5fd75103F8560D3c51C4Dcf6'

web3.eth.getTransactionCount(account1,(error, txCount)=> {


    // build a transaction object
    const  txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.3', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    } 

    console.log(txObject)

    // sign traction with private key of sender

    const tx = new Tx(txObject)
    tx.sign(privateKey1)

    // serialize the transaction

    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    // broadcast transaction to the network

    web3.eth.sendSignedTransaction(raw, (error, txHash) => {
        console.log(txHash)
    }) 
})


