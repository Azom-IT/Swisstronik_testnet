require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xfc2cc48dfe36fa67ea8aa30f65f98df092c38e7212d900fbf1808fddcbc80ec8"],
    },
  },
};

