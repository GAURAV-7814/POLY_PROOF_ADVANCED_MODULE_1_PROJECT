require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: 'https://rpc-amoy.polygon.technology',
      accounts: ['d6303ef9284ef7948104de40654310460ffbb71d0d78121d85140da2af99760a'],
    },
    sepolia: {
      url: 'https://rpc.sepolia.org',
      accounts: ['d6303ef9284ef7948104de40654310460ffbb71d0d78121d85140da2af99760a'],
    },
  }
};
