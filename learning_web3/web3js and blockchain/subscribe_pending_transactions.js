const Web3 = require('web3') 
let ws = 'wss://mainnet.infura.io/ws'
var web3 = new Web3(ws); 

// bitmeye yakın txhashları döndürür.

web3.eth.subscribe('pendingTransactions', (error, txhash)=> {
	console.log(txhash)
})

// ------------------------------------
// 1 eth den fazla olan bitmeye yakın işlemleri döndürür.
// hash ve eth değerini döndürür.

web3.eth.subscribe('pendingTransactions', (error, txhash)=> {
	if(!error)
	{
		web3.eth.getTransaction(txhash, (error,tx)=> {
			if(tx!=null){
				//console.log(tx)
				// filler transaction >= 1 eth
				if(tx.value >= 1000000000000000000) {
					console.log(txhash)
					console.log(web3.utils.fromWei(tx.value, 'ether'), 'ether')

				}
			}
		})
	}
	else
	{
		console.log(error)
	}
})
