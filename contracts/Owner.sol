// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Owner {
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function changeOwner(address newOwner) public {
        require(msg.sender == owner, "Only owner can change owner");
        owner = newOwner;
    }
}
