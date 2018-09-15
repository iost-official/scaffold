const fs = require('fs');

function makeDir(root) {
    if (fs.existsSync(root)) {
        return "error: project exists!"
    }
    fs.mkdirSync(root);
}

exports.command = 'new';

exports.describe = 'create a new DApp';

exports.builder = {
};

exports.handler = function (argv) {
    const pn = argv._[1];
    console.log("make new project : " +argv._[1]);
    makeDir(pn)
};