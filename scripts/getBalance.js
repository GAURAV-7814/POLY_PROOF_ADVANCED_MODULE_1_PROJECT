const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/NFTContract.sol/NFTContract.json");

const tokenAddress = "0xcc8e00f60d9fbbac982267a8b5dd1c79f5679ca7"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x1aff82C94351A03C9968aD54e6412088e067bBf9";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs`);
  }
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });