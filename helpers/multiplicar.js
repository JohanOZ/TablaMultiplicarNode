const fs = require('fs');

const colors = require('colors');


const crearArchivo = async( numero, limite, listar ) => {

    try {

        let salida, salidaConsola = '';

        for (let index = 1; index <= limite; index++) {
            salida += `${numero} x ${index} = ${numero * index}\n`;
            salidaConsola += `${ numero } ${ 'x'.green } ${index} ${'='.green} ${ numero * index }\n`; 
        }
        if(listar) {
            console.log(`========== Tabla del: ${numero} ==========`.rainbow);
            console.log(salidaConsola);
        }
    
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida );
    
        return `Tabla del ${numero}`; 
        
    } catch (err) {
        throw err;
    }


 }

 module.exports = {
     crearArchivo 
 }