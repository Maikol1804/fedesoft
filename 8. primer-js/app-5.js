// Sumar dos numeros, por medio de una funcion
// la funcion retorna la multiplicacion de los documentos
function mul(a,b){
    return a*b;
}

// una funcion que me indique si el numero es impor por medio
// de la consola
function isImpar(num){ 
    return (num % 2 == 1);
}

// retornar una arreglo, pero que el retorno sea su numeor opuesto
let numeros = [4, -9, 3, -1, 8, 10, 12, 8, -7, 20]
function opuesto(numeros){
    for(var i = 0; i < numeros.length; ++i){
        numeros[i] *= -1;
    }
    return numeros;
}

let opuesto2 = (numeros) => {
    numeros.forEach(element => {
        element *= -1;
    });
    return numeros;
}

// contar la cantidad de numeros negativos que tiene un arreglo
function cantNeg(numeros){
    let cant = 0;
    for(var i = 0; i < numeros.length; ++i){
        if(numeros[i] < 0){
            cant++;
        }
    }
    return cant;
}

// hacer una funcion que sume dos numeros y devuelva su resultado
// arrow function
function sum(a,b){
    return a + b;
}
let sum2 = (a,b) => {
    return a + b;
};

// hacer una funcion que concatene dos cadenas y retorne el tamaño de cada cadena
// ejemplo 'pedroluis (9)'
function concatLenght(cad1, cad2){
    return (cad1 + "" + cad2).length;
}

//hacer una funcion que retorne true o false si un numero es mayor a otro
function isMayor(a,b){
    return a > b;
}

// hacer una funcion que retorne el minimo de dos numeros
function min(a,b){
    return (a < b ? a : b); 
}

function fun(){
    return new Promise( function(resolve, reject){
        setTimeout(() => {
            resolve('1');
        }, 100);
    });
}

fun()
.then(data => console.log(data))
.catch(data => console.log(data))