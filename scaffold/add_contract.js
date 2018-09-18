const util = require('./util.js');

exports.command = 'contract <name>';

exports.describe = 'create a smart contract class';

exports.builder = (yargs) => {
    yargs.positional('name', {
        describe: 'the name of contract class',
        type: 'string'
    })
}

const lang = "javascript";
const version = "1.0.0";

exports.handler = function (argv) {
    path = "./contract/" + argv.name + ".js";
    console.log("create file: " + path);
    var err = util.createFile(path);
    if (err !== undefined) {
        console.error(err.toString().yellow);
        return;
    }

    var content = "class ContractName" + "\n" +
        "{" + "\n" +
        "   constructor() {" + "\n" +
        "   }" + "\n" +
        "   init() {" + "\n" +
        "   }" + "\n" +
        "}";
    content = content.replace("ContractName", argv.name);
    util.writeFile(path, content);

    var abi = {};
    abi["lang"] = lang;
    abi["version"] = version;
    abi["abi"] = [];
    var abiStr = JSON.stringify(abi, null, 4);
    abiPath = "./abi/" + argv.name + ".json";
    console.log("create file: " + abiPath);
    util.writeFile(abiPath, abiStr);

    return;
};