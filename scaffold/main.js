#!/usr/bin/env node
const argv = require('yargs')
    .command('$0', 'help', () => {}, (argv) => {
        console.log('add help here')
    })
    .command(require('./new'))
    .argv;
