// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Blitter is Ownable {
    /// Bleet max length is 256 characters
    error BleetContentMaxLength();
    struct Bleet {
        address author;
        bytes32[] hashtags;
        bytes32 gif;
        uint256 earnings;
        bytes content;
    }

    Bleet[] public bleets;
    mapping(bytes32 => uint256[]) public hashtags;
    mapping(address => uint256[]) public userBleets;
    mapping(address => uint256) public balance;
    mapping(address => bytes32) public usernames;

    event BleetCreated(
        uint256 id,
        address author,
        bytes32[] hashtags,
        bytes32 gif,
        bytes content
    );
    event BleetTipped(uint256 id, address from, uint256 amount);
    event UsernameChanged(
        address user,
        bytes32 oldUsername,
        bytes32 newUsername
    );

    constructor() {}

    function newBleet(
        bytes32[] calldata _hashtags,
        bytes32 _gif,
        bytes memory _content
    ) external {
        /**
         * There's no simple way to check string length. Some characters might take more than 1 byte,
         * but this is the best way to keep the check as cheap as it can be
         */
        if (_content.length > 256) revert BleetContentMaxLength();

        bleets.push(Bleet(msg.sender, _hashtags, _gif, 0, _content));
        uint256 index = bleets.length - 1;

        // Push the Bleet index to each of its hashtags array
        for (
            uint256 hashtags_index = 0;
            hashtags_index < _hashtags.length;
            ++hashtags_index
        ) {
            hashtags[_hashtags[hashtags_index]].push(index);
        }

        // Push the Bleet index to the user bleets array
        userBleets[msg.sender].push(index);

        emit BleetCreated(index, msg.sender, _hashtags, _gif, _content);
    }

    function setUsername(bytes32 _username) external {
        bytes32 oldUsername = usernames[msg.sender];

        if (oldUsername != bytes32(0)) {
            emit UsernameChanged(msg.sender, oldUsername, _username);
        }

        usernames[msg.sender] = _username;
    }

    function tip(uint256 id) external payable {
        (bool success, ) = payable(bleets[id].author).call{value: msg.value}("");
        require(success);
        emit BleetTipped(id, msg.sender, msg.value);
    }

    function getBleets() external view returns (Bleet[] memory) {
        return bleets;
    }

    function getUserBleets(address userAddress) external view returns (uint256[] memory) {
        return userBleets[userAddress];
    }

    function getHashtagBleets(bytes32 hashtag) external view returns (uint256[] memory)
    {
        return hashtags[hashtag];
    }
}
