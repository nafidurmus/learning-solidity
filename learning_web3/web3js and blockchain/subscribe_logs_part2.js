const Web3 = require('web3') 
let ws = 'wss://mainnet.infura.io/ws'
var web3 = new Web3(ws); 


// fileter out all log happen with cryptokitties

web3.eth.subscribe('logs',{
	address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
	topics:['0x6b72145cd39e2a6fba0a95cf54f52ee8c8ed6f6fc53e22d98286b5ddc5ad7db6'],
	fromBlock: 'latest'
},(error, log)=>{
	if(!error)
	{
		console.log(log)
	}
})

// https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d#code event Pregnant 

/*pregnant_event = 'Pregnant(address, uint256, uint256, uint256)'
pregnant_event_hashed = web3.utils.sha3(pregnant_event)

console.log(pregnant_event_hashed)*/
// dönen deger asagıda 

// 0x6b72145cd39e2a6fba0a95cf54f52ee8c8ed6f6fc53e22d98286b5ddc5ad7db6