const Web3 = require('web3') 
let ws = 'wss://mainnet.infura.io/ws'
var web3 = new Web3(ws); 

// log degerlerini döndürür.

web3.eth.subscribe('logs',{},(error, log)=>{
	if(!error)
	{
		console.log(log)
	}
})

// fileter out all log happen with cryptokitties
// cryptokitties contract address:  0x06012c8cf97BEaD5deAe237070F9587f8E7A266d

// verilen adrese göre log degerlerini döndürür.

web3.eth.subscribe('logs',{address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'
							},(error, log)=>{
	if(!error)
	{
		console.log(log)
	}
})

/*{ address: '0x8d12A197cB00D4747a1fe03395095ce2A5CC6819',
  topics: 
   [ '0x1e0b760c386003e9cb9bcf4fcf3997886042859d9b6ed6320e804597fcdb28b0' ],
  data: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aa43e2d1a9130000000000000000000000000005e6364d4534f780ae053b93b45c8b8840e683eb700000000000000000000000000000000000000000000091f513891ad0cbc000000000000000000000000000000047bf19673df52e37f2410011d10000000000000000000000000000000000000000000000000000000000000000000f4fae603000000000000000000000000da11b1d3615edf75092c614f9c6470e8bd67105b000000000000000000000000000000000000000000000000000000000000001bdfd4bed2fb56f273fb6f52fb168c9ddbbb08728bffc46e134540fac4d11418503c1566c8b905687b9b3e4897aec37a3a1c44a2738470ef3815d01ffcadba7cf6',
  blockNumber: 6886383,
  transactionHash: '0x01b3a86acabaef420240e339c942e06d0bbfb542a78ed473c90f8046dc4cfc59',
  transactionIndex: 106,
  blockHash: '0xb981c09d84a46574960dd6dd8e9b4435f3bb044b25e0e929856d48416ddf15d6',
  logIndex: 70,
  removed: false,
  id: 'log_12372754' }*/


/*{ address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
  topics: 
   [ '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' ],
  data: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f3bdcb01f6b4348b769726a41ffd9c2c19b11a80000000000000000000000000000000000000000000000000000000000139472',
  blockNumber: 6886444,
  transactionHash: '0x1c04ed46904d1b983b105c561ebd1aecbeebdce622f8950ad81ac6122fc627eb',
  transactionIndex: 13,
  blockHash: '0x2eae0b4a8097216584c8245adfacc70aa3554295906823739f5ce7ccbcc782f0',
  logIndex: 31,
  removed: false,
  id: 'log_3e4a4a06' }
*/