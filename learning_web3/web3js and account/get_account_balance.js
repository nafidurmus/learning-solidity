let Web3 = require('web3') 
//infura
let url_infura = 'https://mainnet.infura.io/v3/cbaafc4d284d4c5a8c0eb12424332fa3'

let web3 = new Web3(url_infura) 

// https://etherscan.io/ den bir tane adres kopyaladık.

let address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'

web3.eth.getBalance(address, function(error, balance){
	if(!error)
	{
		//console.log(balance) // 2064487027108310500000000
		console.log(web3.utils.fromWei(balance, 'ether')) // 2064487.0271083105
	}
	else
	{
		console.log(error)
	}
})

