import {ethers} from 'hardhat';

const main = async () => {
    const nftContractFactory = await ethers.getContractFactory('NFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log('contract deployed to: ',nftContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();