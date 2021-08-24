const { crearArchivo } = require('./helpers/multiplicar');
const argv= require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h, argv.a)
        .then ( nombreArchivo => {
                if ( argv.a ){
                console.log( `${nombreArchivo} creado.`)
                }
        } )
        .catch ( err => console.log( err ));