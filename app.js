const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();

crearArchivo( argv.n, argv.c, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado Con Éxito!') )
    .catch( err => console.log(err));
  



