pragma solidity ^0.4.0; // Kullanacağımız versiyonu seçiyoruz.

contract BankAccount {
    uint public  number = 34; // private değişken tanımladık.
    // uint public number; public tanımlanması.
    address public contractCreator;
    
    function BankAccount(){
        contractCreator = msg.sender;
    }
    
    modifier canChangeValue(){
        if(contractCreator!= msg.sender){ // değeri sadece gönderen kişinin değiştinesini istediğimiz de kullanırız.
            throw;
        }
        _; // çalışmaya devam et.
    }
    
    //getter fonkisiyonu
    function getNumber() constant returns(uint) { // unit : unsigned integer
    // constant fonkisyonlarda değer oluşturulur sonra blok yok edilir. değer saklanmaz.
        return number;
    }
    //setter fonkisyonu
    function setNumber(uint newValue) canChangeValue returns(uint){
      
        number = newValue;
        return number;
    }
}