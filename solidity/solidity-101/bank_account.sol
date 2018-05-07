pragma solidity ^0.4.0; // Kullanacağımız versiyonu seçiyoruz.

contract BankAccount {
    address accountOwner;
    bool public transferFlag = false;
    
    function BankAccount(){
        accountOwner = msg.sender;
    }
    
    modifier canwithdrawMoney(){
        if(msg.sender != accountOwner) {
            throw;
        }
        _;
    }
    
    function withdrawMoney(uint amount) canwithdrawMoney{
        if(accountOwner.send(amount)){
            transferFlag = true;
        }else {
            transferFlag = false;
        }
    }
    
    function deposiMoney() payable {
        
    }
    
    function checkBalance() constant returns(uint){
        return this.balance;
    }
  
}