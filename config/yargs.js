const argv = require('yargs')
.option('b',{
    alias:'base',
    demandOption:true,
    type:'number',
    describe:'Es la base de la tabla de multiplicar'
})
.option('h',{
    alias:'hasta',
    demandOption:false,
    type:'number',
    describe:'Es el limite de la tabla de multiplicar'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Muestra la tabla en consola'
    
})
.check((argv,options)=>{
    if(isNaN(argv.base)){
        throw 'La base tiene que ser un número'
    }
    return true;
})
.check((argv,options)=>{
    if(isNaN(argv.hasta) && argv.demandOption == true){
        throw 'La base tiene que ser un número'
    }
    return true;
})
.argv;

module.exports=argv;