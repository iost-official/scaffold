const fs = require('fs');

function makeDir(root) {
    const path = require("path");

    if (path.existsSync(root)) {
        return "error: project exists!"
    }

    fs.mkdirSync(root, 755);
    fs.existsSync(root + "/")
}



exports.command = 'new';

exports.describe = 'create a new DApp';

exports.builder = {
};

exports.handler = function (argv) {
    console.log("make new project : " +argv._[0])

};