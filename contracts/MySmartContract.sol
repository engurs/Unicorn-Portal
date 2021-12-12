// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MySmartContract {

    uint totalUnicorns; // stored permanently on the contract, so kinda global variable

    constructor(){
        console.log("Its the developer's very first smart contract!");

    }

//  be called by run.js

//  POST
    function unicorn() public {
        totalUnicorns += 1;
        // print wallet address of the person who called the function
        console.log("%s has unicorned!", msg.sender);
    }

//  GET
    function getTotalUnicorns() public view returns (uint256) {
        console.log("We have %d total waves!", totalUnicorns);
        return totalUnicorns;
    }
}