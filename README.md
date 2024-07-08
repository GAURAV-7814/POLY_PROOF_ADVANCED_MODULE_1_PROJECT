
# MODULE 1 PROJECT

This program is a Module 1 Project program that demonstrates the basic syntax and functionality of the Solidity programming language and Javascript.
## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain .The purpose of this project is to 
1. Generate a 5-item collection using DALLE 2 or Midjourney etc.
2. Store items on IPFS using pinata.cloud or any other according to your choice
3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
4. You should have a promptDescription function on the contract that returns the prompt you used to generate the images
5. Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
6. Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
7. Write a hardhat script to batch transfer all NFTs from Ethereum sepolia to Polygon amoy using the FxPortal Bridge
8. Approve the NFTs to be transferred
9. Deposit the NFTs to the Bridge
10. Test balanceOf on Amoy 
This program serves as a simple and straightforward introduction to Solidity programming, and can be used as a stepping stone for more complex projects in the future.

## Getting Started

# To run the entire project you can use this steps:

You will want to do the following steps to run the project :-

1. First of all , install the metamask wallet on Browser.
2. Clone the Github repository(make sure each file here is available).
3. Open VS Code.
4. Inside the project directory, in the terminal type: npm i and wait for it to complete.
5. Open two additional terminals in your VS code.
6. In the second terminal type: npx hardhat node
7. In Metamask , you have to Create a localhost network to run this project. In metamask , click on left upper side icon to change network , then click on "Add Network" button . After this , click on "Add a network manually" button . Then start filling details , choose Network name as your choice . In New RPC URL box , copy link from terminal ("http://127.0.0.1:8545/") and paste in box. Enter Chain ID as "31337" and Currency symbol as "ETH". Click on "Save" button . Localhost network is added and click on "Switch to your network name" button.
8. In this we have to add an account to metamask . In metamask , Click on Account 1 drop-down menu and then click on "Add account or hardware wallet" button. After this , click on "Import account" button . choose select type as Private key and copy the private key of any account from the terminal(prefer Account #0 private key) and paste in the "Enter your private key string here:" box . click on Import button . Our Account is added to the Metamask.
9. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
10. Copy deployed to "address" from terminal and paste it in index.js variable "contractAddress" .
11. Back in the first terminal, type npm run dev to launch the front-end.
12. open the URL link from terminal in the browser on which we have added metamask account , localhost network and Account.
13. The project will be running on your localhost. Typically at http://localhost:3000/
14. Project is successfully completed. 
 
## Author

GAURAV GARG
STUDENT
CHANDIGARH UNIVERSITY
