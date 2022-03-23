const {crearArchivo, archivo2} = require('./helpers/multiplicar');
const argv =  require('./config/yargs');





// console.log(process.argv);

// console.log(argv);

// console.log('base: yargs - ',argv.base);



 archivo2(argv.base, argv.listar, argv.hasta).then(nombreArchivo => console.log(nombreArchivo, 'creado'))
 .catch(error => console.log(error))