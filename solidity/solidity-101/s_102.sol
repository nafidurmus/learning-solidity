pragma solidity ^0.4.0; // Kullanacağımız versiyonu seçiyoruz.

contract BankAccount {
    function depositMoney() payable { //payable değer yüklemesi yapabilirsin.
        
    }
    
    function checkBalance() returns(uint){
        return this.balance; //this contratın kendini işaret eder.
    }
}