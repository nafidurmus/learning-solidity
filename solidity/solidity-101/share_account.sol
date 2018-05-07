pragma solidity ^0.4.18;

contract ShareAccunt {
    // owner olarak bütün parayı çekme işlemi
    // owner hesapları gücenli bir şekilde kapatabilmeli. kapatılan hesaptaki eterler eşit olarak diğet kullanıcılara dağıtılmalı.
    // owner ownerlığını bağkasına devredebilmeli.
    struct AccountBalance {
        address addr;
        uint balance;
        bool isActive;
        
    }
    mapping(address => AccountBalance) accounts;
    
    uint maxAccountCount;
    uint public numberOfAccounts;
    
    function ShareAccunt(uint _maxAccountCount){
        if(_maxAccountCount != 0){
            maxAccountCount = _maxAccountCount;
        }else {
            maxAccountCount = 128;
        }
    }
    
    function openAccount() payable public {
        require(!isAccountExists(msg.sender)); //modifier ile yap
        require(numberOfAccounts < maxAccountCount); //modifier ile yap
        
        
        accounts[msg.sender] = AccountBalance(msg.sender, msg.value, true);
        numberOfAccounts++;
        
    }
    
    function withdrawMoney(uint amount)public{
        require(isAccountExists(msg.sender)); //modifier ile yap
        require(accounts[msg.sender].balance >= amount); //modifier ile yap
        
        msg.sender.transfer(amount);
        
        accounts[msg.sender].balance -= amount;
    }
    
    function depositMoney() payable public {
        require(isAccountExists(msg.sender)); //modifier ile yap
        accounts[msg.sender].balance += msg.value;
    }
    
    function isAccountExists(address accountOwner) private returns (bool) {
        return accounts[accountOwner].addr != address(0) && accounts[accountOwner].isActive;
    }
     
}