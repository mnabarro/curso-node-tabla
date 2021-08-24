const fs = require('fs');
const { arch } = require('os');
const crearArchivo = async ( base = 1, listar = false, hasta =10, archivo = false) => {
let colors = require('colors');

try {
    let salidaConsola = '';
    let salidaTxt = '';
    let fn = `./salida/Tabla-del-${base}.txt`;

    salidaTxt +=` ============\n Tabla del ${base}\n ============\n\n`
    salidaConsola +=` ============\n Tabla del ${base}\n ============\n\n`

    for(let i = 1; i <= hasta; i++){
        salidaConsola += ` ${ base } ${'x' .yellow} ${ i } ${'=' .yellow} ${ base * i }\n`;
        salidaTxt += ` ${ base } x ${ i } = ${ base * i }\n`;
    }

    if ( listar ) {
        
        console.log( salidaConsola );
    }

    if ( archivo ){
        
        fs.writeFileSync(fn, salidaTxt);
    }

    return fn;
}
catch ( err ) {
    throw err;
}

}

module.exports = {
    crearArchivo
}