const tokenContractJSON = require("../artifacts/contracts/NFTContract.sol/NFTContract.json");
require('dotenv').config()

const tokenAddress = "0xd2D96e0de9dAB7891Be9d0C0cA7399ed9068B986"; //deployed address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x1aff82C94351A03C9968aD54e6412088e067bBf9";

async function main() {
  const nft = await ethers.getContractAt("NFTContract", "0xd2D96e0de9dAB7891Be9d0C0cA7399ed9068B986");
  const tokenURIs = [
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/QmTZ6eFK5Qep3BfMccwtnR8kbpnQQuvrAb8UKJEhmZHUwm?filename=0.jpg",
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/Qmer71sqhFLrVt1JorswzrE1w1sMv4doXoFdm5ZwzwJe3h?filename=1.jpg",
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/QmNgLzMLVpxeS6YGcLxP5iYY3pBZvf1NBbyGbnsSEBd9JX?filename=2.jpg",
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/QmXZ5dZBSk5PjPs18dTTqSzrAwmb64EqRyczEvLTGJHNSv?filename=3.jpg",
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/Qme4fwPvzYa5khvqyHEW77JcqyXrkW958x57HFPZbBbxc3?filename=4.jpg"
  ];

  const prompts = [
    "snow with a dramatic effect.",
    "an astronaut dance party on the surface of mars",
    "a panda bear baking a cake in a sunny kitchen",
    "charcuterie board plating for a festive brunch",
    "gorgeous abandoned medieval mansion in a fairytale forest"
  ];

  for (let i = 0; i < tokenURIs.length; i++) {
    await nft.mintNFT(tokenURIs[i], prompts[i]);
    console.log(`Minted NFT with ID ${i} to owner with prompt: ${prompts[i]}`);
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
