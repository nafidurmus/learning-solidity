///greeter example
pragma solidity ^0.4.18;
/// contract ismi ile function ismi aynı olmalı :D
contract Greeter {
    
    struct GreetingMessage { // structlar public olmaz
        string message;
        address owner;
    }
    
    GreetingMessage[] public greetings; /// defautu private public tanımlama -string public greeting;- şeklinde 
    uint public repliesCount;
    
    function Greeter()  public  {
        greetings.push(GreetingMessage("Hello World", msg.sender));
        
    }
    function getGreeting(uint idx) public constant returns (string, address){ /// kücük harfle başlamalı
        return (greetings[idx].message, greetings[idx].owner);
        
    }
    
     