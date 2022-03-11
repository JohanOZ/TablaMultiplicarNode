const { describe } = require('yargs');

const argv = require('yargs')
    .option('n', {
        alias: 'Número',
        type: 'number',
        demandOption: false,
        describe: 'Es el número a multiplicar',
        default: 10
    })
    .option('c', {
        alias: 'limite',
        type: 'number',
        demandOption: false,
        describe: 'Es el limite a multiplicar',
        default: 10
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    // .check( (argv, options) => {
    //     if( isNaN( argv.b)){
    //         throw 'Tiene que ser un número'
    //     }
    //     return true;
    // })
    .argv;

module.exports = argv;