const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'harvest crash humor actor gun copper alert common interest behind lab pepper',
    'https://rinkeby.infura.io/v3/d48db798352c432ab0d57885609e7d09'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log(`Attempting to deploy from account ${accounts[0]}`);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({gas: 1000000, from: accounts[0]});

    console.log(`Contract deployed to ${result.options.address}`);

    provider.engine.stop();
};

deploy();

/*
Attempting to deploy from account 0x5530A826e57a674c45A4Cb20eAC99E5Cf28C6344
Contract deployed to 0xf6A09Ba3e258E76B9C31ec100CCF20E046F737a2
*/