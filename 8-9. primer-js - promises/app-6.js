// multiplicacion dos numeros, por medio de una funcion
// la funcion retorna la multiplicacion de los documentos

// function multiplicar(a, b) {
//   return a * b;
// }


// una funcion que me indique si el numero es impor por medio
// de la consola
// function numeroImpar(num) {
//   console.log(num % 2 === 1 ? 'Es Impar' : 'Es Par');
// }

// numeroImpar(multiplicar(3 * 8))


// retornar una arreglo, pero que el retorno sea su numeor opuesto
let numeros = [4, -9, 3, -1, 8, 10, 12, 8, -7, 20]
// console.table(numeros);
// let arregloOpuesto = numeros.map(negativo)
// console.table(arregloOpuesto);

// function negativo(numero) {
//   return numero *= -1;
// }

// contar la cantidad de numeros negativos que tiene un arreglo
// let contadorNegativo = 0;
// numeros.forEach((elemento) => {
//   if (elemento < 0) {
//     contadorNegativo++
//   }
// })
// console.log(contadorNegativo);


// hacer una funcion que sume dos numeros y devuelva su resultado
// arrow function

// let sumar = (a, b) => a + b;
// console.log(sumar(1, 3));


// hacer una funcion que concatene dos cadenas y retorne el tamaño de cada cadena
// ejemplo 'pedroluis (9)'

//hacer una funcion que retorne true o false si un numero es mayor a otro


// hacer una funcion que retorne el minimo de dos numeros


// Promesas

function paso1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve([200])
      // reject(400)
    }, 1500);
  });
}

function paso2(datos) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve([...datos, 300])
    }, 500);
  });
}

function paso3(datosFinales) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(['Paso 3', datosFinales])
      // reject(400)
    }, 100);
  });
}

paso1()
  .then(
    function (algo) {
      console.log(algo);
      paso2(algo)
        .then(function (otracosa) {
          console.log(otracosa);
          paso3(otracosa)
            .then(function (parametro) {
              console.log(parametro)
            })
            .catch(data => console.error(data));
        })
        .catch(data => console.error(data));
    }
  )
  .catch(data => console.error(data));
paso1().then(function () {})