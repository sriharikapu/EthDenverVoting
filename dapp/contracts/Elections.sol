pragma solidity >=0.4.19;

contract Elections {
  struct Candidate {
    address key;
    string name;
  }

  struct ElectionStruct {
    bytes32 id;
    Candidate[] candidates;
  }

  mapping(bytes32 => ElectionStruct) elections;

  function createElection(bytes32 election) public {
    elections[election].id = election;
  }

  function addCandidate(bytes32 election, address key, string name) public {
    Candidate memory candidate = Candidate(key, name);
    elections[election].candidates.push(candidate);
  }

  function getNumCandidates(bytes32 election) public view returns (uint256) {
    return elections[election].candidates.length;
  }

  function getCandidate(bytes32 election, uint256 index) public view returns (address key, string name) {
    Candidate memory candidate = elections[election].candidates[index];
    return (candidate.key, candidate.name);
  }
}
