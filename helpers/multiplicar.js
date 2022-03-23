const fs = require('fs');
console.clear();


var colors = require('colors');
 

/*
const crearArchivo = ( base = 5 ) =>{

    let salida = '';

    console.log("=================");
    console.log("Tabla del " +  base);
    console.log("=================");   
    
    
    for (let i = 1; i < 11; i++) {    
        // console.log("5 * ", i, " = ", 5 * i);        
        salida +=`${base} x ${i} = ${base * i}\n`;    
    }
    fs.writeFileSync(`tabla-${base}.txt`,salida);
}


const archivo = (base)=>{
    return new Promise((resolve, reject)=>{
        let salida = '';       
        
        for (let i = 1; i < 11; i++) {    
            // console.log("5 * ", i, " = ", 5 * i);        
            salida +=`${base} x ${i} = ${base * i}\n`;    
        }
        fs.writeFileSync(`tabla-${base}.txt`,salida);

        (salida.length > 2)
        ?resolve(salida)
        :reject('No se puedo realizar')
    })
}
*/
const archivo2 = async (base, listar=false, hasta = 10) => {
    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            // console.log("5 * ", i, " = ", 5 * i);        
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if(listar){
            console.log("=================".green);
            console.log("Tabla del " +  base);
            console.log("=================".green);   
            console.log(salida);
            

        }

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {  archivo2 };