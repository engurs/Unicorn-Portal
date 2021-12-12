require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Pp05fEc2358V_6iS_Wvtbkh4v3sbtd0T', // 'YOUR_ALCHEMY_API_URL',
      accounts: ['3050fc67c91f6167ca2c6fcabebe61c5fce7b8860135c864369ad6be8acd52f8'], // ['YOUR_PRIVATE_RINKEBY_ACCOUNT_KEY']
    },
  },
};
