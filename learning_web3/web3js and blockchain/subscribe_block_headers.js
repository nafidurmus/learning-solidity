const Web3 = require('web3') 
let ws = 'wss://mainnet.infura.io/ws'
var web3 = new Web3(ws); 

// blokla alakalı bilgileri döndürür.
web3.eth.subscribe('newBlockHeaders', (error, blockHeader)=>{
	if(!error)
	{
		console.log(blockHeader)
	}
	else
	{
		console.log(error)
	}
})