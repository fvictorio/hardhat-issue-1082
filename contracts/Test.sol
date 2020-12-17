pragma solidity ^0.7.0;

contract Test {
  struct Record {
    address owner;
    address resolver;
    uint64 ttl;
  }
  mapping(bytes32 => Record) records;

  function recordExists(bytes32 node) public view returns (bool) {
      return records[node].owner != address(0x0);
  }
}
