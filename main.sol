// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MusicLicensingContract {
    address public licensor;
    address public licensee;
    string public musicalWork;
    uint256 public licenseFee;
    uint256 public expirationDate;

    enum LicenseStatus { Inactive, Active, Expired }

    LicenseStatus public status;

    event LicenseGranted(address indexed licensor, address indexed licensee, string musicalWork, uint256 licenseFee, uint256 expirationDate);
    event LicenseDeactivated(address indexed licensor, address indexed licensee, string musicalWork);
    event LicenseFeePaid(address indexed licensor, address indexed licensee, uint256 amount);
    event LicenseActivated(address indexed licensor, address indexed licensee, string musicalWork);

    modifier onlyLicensor() {
        require(msg.sender == licensor, "Only the licensor can call this function");
        _;
    }

    modifier onlyLicensee() {
        require(msg.sender == licensee, "Only the licensee can call this function");
        _;
    }

    modifier onlyActiveLicense() {
        require(status == LicenseStatus.Active, "License is not active");
        _;
    }

    constructor(
        address _licensor,
        address _licensee,
        string memory _musicalWork,
        uint256 _licenseFee,
        uint256 _durationDays
    ) {
        licensor = _licensor;
        licensee = _licensee;
        musicalWork = _musicalWork;
        licenseFee = _licenseFee;
        expirationDate = block.timestamp + (_durationDays * 1 days);
        status = LicenseStatus.Inactive;

        emit LicenseGranted(_licensor, _licensee, _musicalWork, _licenseFee, expirationDate);
    }

    function payLicenseFee() external onlyLicensee payable {
        require(msg.value == licenseFee, "Incorrect license fee amount");
        emit LicenseFeePaid(licensor, licensee, msg.value);
    }

    function activateLicenseAfterPayment() external onlyLicensor onlyActiveLicense {
        require(address(this).balance == licenseFee, "License fee has not been fully paid");

        // Transfer the license fee to the licensor
        payable(licensor).transfer(address(this).balance);

        // Activate the license
        status = LicenseStatus.Active;
        emit LicenseActivated(licensor, licensee, musicalWork);
    }

    function deactivateLicense() external onlyLicensor onlyActiveLicense {
        status = LicenseStatus.Inactive;
        emit LicenseDeactivated(licensor, licensee, musicalWork);
    }

    function getLicenseStatus() external view returns (LicenseStatus) {
        if (block.timestamp > expirationDate) {
            return LicenseStatus.Expired;
        } else {
            return status;
        }
    }
}
