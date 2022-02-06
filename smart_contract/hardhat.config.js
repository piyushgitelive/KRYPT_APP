require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/geAJbjQwUyhNYN04PHw-dawz901prgs1',
      accounts: ['eb763f9e5c4b01e072810bc010afdef6f20dcc5f29d7cc1ce36104efa336310a'],
    },
  },
};