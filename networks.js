const { projectId, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://rinkeby.infura.io/v3/${projectId}`
      ),
      networkId: 4,
    },
    rootStockTestnet: {
      provider: () => new HDWalletProvider(
        mnemonic, 'https://public-node.testnet.rsk.co'
      ),
      networkId: 31,
    }
  },
};
