const CONTRACT_ADDRESS = "0xcE11c36315c32318C1B59C5963fEeFa34d444755"
const META_DATA_URL = "ipfs://bafyreifghvlc5sv4zxa52wiwfftujzmongdh35nkjjf3qz5zn2rdikczka/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });