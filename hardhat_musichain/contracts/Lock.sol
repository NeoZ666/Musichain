// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lock {
    address public licensor;

    event PaymentReceived(address indexed from, uint256 amount);
    event LicensorUpdated(address indexed oldLicensor, address indexed newLicensor);
    event MusicDetailsEvent(uint256 fee, uint256 daysToAccess, string musicalWork);

    function emitMusicDetails(uint256 _fee, uint256 _daysToAccess, string memory _musicalWork) external {
        emit MusicDetailsEvent(_fee, _daysToAccess, _musicalWork);
    }

    constructor() {
        licensor = msg.sender;
    }

    function receivePayment() external payable {
        require(msg.sender != licensor, "Licensor cannot pay itself");
        emit PaymentReceived(msg.sender, msg.value);
        // Directly send the funds to the licensor
        payable(licensor).transfer(msg.value);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function updateLicensor(address newLicensor) external {
        require(msg.sender == licensor, "Only licensor can update licensor");
        require(newLicensor != address(0), "Invalid address");

        emit LicensorUpdated(licensor, newLicensor);
        licensor = newLicensor;
    }
}
