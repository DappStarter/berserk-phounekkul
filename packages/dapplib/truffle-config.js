require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note script assume install industry food stomach'; 
let testAccounts = [
"0xcb8b97698c2df368fa0673afe8a8afc65cebd6f6efd8f1be539a3f6f6318441d",
"0x7b4a4363d04c7e4bf6df5140c8a9c4062f5c17741921abb3d8ca254ed4197a06",
"0xde5329856f9ca91fea9ac05ca38eff9dc81db39fbb018359a32a2680e1874eff",
"0x448e8c81709f034afedf6ef43c8a6fbc591388d1de257bd2b9ba7a3965730fc3",
"0xeed9dde46e233c2a85f7d874dd8be43d9fc8dc3eb0c807e9ccd5fca663882e8f",
"0x1f0a227ed684c65c218b6346d6c8ec6b5005e70c72cd412bf1305c53e955c09e",
"0x553f3f344f596d75fa0af6f7f99d5f76c47b068d44f43f95fccc68cecc4ceece",
"0xd1ba2c308007b7247fa396a2df83605e70142ceb7bae04696e26fab3fc800fa5",
"0xc0b9cd9b26718eec80ab19c5a5da78d5fbf9f21a247f5d47c5db42e76238e885",
"0xc1d42e842f1c6860f56a83bca1e5a13bba1188dc264080052594ab81bb05a32d"
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
            version: '^0.5.11'
        }
    }
};
