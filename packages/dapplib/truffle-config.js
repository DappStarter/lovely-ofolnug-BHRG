require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name response often unique hover private slot ghost'; 
let testAccounts = [
"0x636ccb649f35648b041662f1c89e5bc7b18b37f311cca340fa1387a144f92001",
"0xbf5ccfed0aed4cdce5b016d3f68af178743611b073d5e479a38673fc580f075c",
"0x78136ccb237442feb57555797830c7cd1ee827c8a54a01ca2af298b55c44fc17",
"0x4805828e1f76ca7159bc22ccc9c81ccb24d712f887513952e4846af145950fdc",
"0xe854329f3d8a96e6d11e64a568f1e8045459863c0fe67e71da6643c8a8441d37",
"0xdbbb1979a1e70ca0a2b40be5896b3771becbb02af31fdabe1fc8af91cb9adfc0",
"0xd553dc18bbc754e69e56a8e5142858665a2ccd37471f0b6fd84d30b3c73c50e9",
"0xecba65b8bbfd8180ecba88ed7526ab72188fbe1162df082505eb35056294fa0b",
"0x94bdaa6cf1a57b92d12817a404fbafd5b1e21a79624339fcf8a2b1fb5c78c874",
"0x2edadc37c03264a36ed3ed161429c16ffc32e71b53410b9d3f96b94e4896f884"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

