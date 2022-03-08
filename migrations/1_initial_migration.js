const Migrations = artifacts.require("Migrations");
const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
  const listOfCandidates = ['Rama', 'Nick', 'Jose']
  deployer.deploy(Voting,
    listOfCandidates.map(name => web3.utils.asciiToHex(name)),
  );
};
