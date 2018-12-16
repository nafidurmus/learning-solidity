const Web3 = require('web3') 
const url_infura = 'https://mainnet.infura.io/v3/cbaafc4d284d4c5a8c0eb12424332fa3'
const web3 = new Web3(url_infura) 

// blok numarasın döndürür

web3.eth.getBlockNumber().then((result)=>{ 
 	console.log(result)
})

//----------------------------------------------
// yukarıdan dönem blok numarasını yazdık

web3.eth.getBlock(6885914).then((block)=>{ 
	console.log(block)
})

// --------------------------------------------
// son işlem yapılan blok numaralarını döndürür.

web3.eth.getBlockNumber().then((result)=>{ 
	for(let i=0; i<100;i++){
		web3.eth.getBlock(result-i).then((block)=>{
			console.log(block.number)
		})
	}
})

// --------------------------------------------
// son işlem yapılan bloku döndürür.

web3.eth.getBlock('latest').then((block)=>{ 
 	console.log(block.number)
})

// --------------------------------------------
// beklemedeki  bloku döndürür.

web3.eth.getBlock('pending').then((block)=>{ 
	console.log(block.number)
})

// ---------------------------------------------
// son işlem yapılan bloku döndürür

web3.eth.getBlock('latest').then((block)=>{ .
 	console.log(block.number)
})

// ---------------------------------------------
// hash numarasından blok numarısı bulma.

web3.eth.getBlock('0xac00d612068d8bbadea539c844328cea4fcfd21f968c160bdeae77c15ba41f94').then((block)=>{ 
 	console.log(block.number)
})

// ---------------------------------------------

// blokdaki haraketlilikleri gösterir.

web3.eth.getTransactionFromBlock(6886037, 2).then(console.log)

// ---------------------------------------------