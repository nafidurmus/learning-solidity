///greeter example
pragma solidity ^0.4.18;
/// contract ismi ile function ismi aynı olmalı :D
contract Greeter {
    
    string  greeting; /// defautu private public tanımlama -string public greeting;- şeklinde 
    
    function Greeter()  public  {
        greeting = "Hello World";
        
    }
    function getGreeting() public constant returns (string){ /// kücük harfle başlamalı
        return greeting;
        
    }
    function getGreeting(string newGreeting) public { /// kücük harfle başlamalı
        greeting = newGreeting;
        
    }
    
    
}