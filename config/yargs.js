const { describe } = require('yargs');

const argv = require ('yargs')
    .option('b', {
        alias: 'base',
        type : 'number',
        demandOption: false,
        describe : 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias : 'listar',
        type : 'boolean',
        demandOption : false,
        default : false,
        describe : 'Lista el resultado'
    })
    .option('h', {
        alias : 'hasta',
        type : 'number',
        demandOption : false,
        default : 10,
        describe : 'Hasta que número debe llegar la tabla'
    })
    .option('a', {
        alias : 'archivo',
        type : 'boolean',
        demandOption : true,
        default : false,
        describe : 'Define si crea el archivo'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b) ){
            throw 'La base debe ser un número';
        }
        return true;
    })
    .argv;

    module.exports = argv;