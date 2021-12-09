const main = async() => {
    // to deploy something to the blockchain, we need to have a wallet address
    const [owner, randomPerson] = await hre.ethers.getSigners();

    //  compile our contract - name is come from solidity file
    const smartContractFactory =  await hre.ethers.getContractFactory('MySmartContract');
    //  deploy our contract locally
    const smartContract = await smartContractFactory.deploy();
    //  wait for it to be mined - local mining; hardhat fake mining
    //  any change changes the blockchain, must be mined. cuz needed to notify everyone! 
    await smartContract.deployed();

    //  get our contract address
    console.log("Contract deployed to:", smartContract.address);
    console.log("Contract deployed by:", owner.address);

    let unicornCount;
    unicornCount = await smartContract.getTotalUnicorns();

    // call unicorn()
    let unicornTxn = await smartContract.unicorn();
    await unicornTxn.wait(); // for mining..

    unicornCount = await smartContract.getTotalUnicorns();

    unicornTxn = await smartContract.connect(randomPerson).unicorn();
    await unicornTxn.wait();

    unicornCount = await smartContract.getTotalUnicorns();
}



const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

//   run on terminal:
//  npx hardhat run scripts/run.js
//  should return smart contract address something like 0x556GDFJ798..aa656 etc.