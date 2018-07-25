// let persona = {
//   name: 'pedro',
//   direccion: {
//     ciudad: 'Bogota',
//     pais: 'Colombia',
//     telefono: 1111111
//   }
// }
// console.log(persona);

// let {
//   ciudad,
//   pais,
//   telefono
// } = persona.direccion;


// console.log(ciudad);
// console.log(pais);
// console.log(telefono);

//Juego Señor de los anillos
// let Persona = function (nombre) {
//   this.name = nombre;
//   this.pv = 100;
//   this.sp = 100;
//   this.curar = function (targetPerson) {

//     if (this.sp >= 40) {
//       targetPerson.pv += 20;
//       this.sp -= 40;
//     } else {
//       console.warn('No tienes puntos de magia');
//     };
//     this.estado(targetPerson)
//   };
//   this.estado = function (targetPerson) {
//     console.warn(this);
//     console.warn(targetPerson);
//   };
//   this.lanzarFlecha = function (targetPerson) {
//     if (targetPerson.pv >= 40) {
//       targetPerson.pv -= 40;
//     } else {
//       targetPerson.pv = 0;
//       console.error(`${targetPerson.name}, ha muerto...!`);
//     }
//     this.estado(targetPerson);
//   }
// }

// let gandalf = new Persona('gandalf');
// // let legolas = new Persona('legolas');

// console.log(gandalf);

// Destructurar
// let name = gandalf.name;
// console.log(name);

// let {
//   name,
//   pv,
//   sp
// } = gandalf;
// console.log(name);
// console.log(pv);
// console.log(sp);


// console.log(legolas);

// gandalf.curar(legolas);


//Arreglos
// let arreglos = new Array();
// let arreglos = [];

// let arreglos = [18, 20, 23, 14, 15, 26];
// console.table(arreglos);
// console.log(arreglos[6]);
// console.log(arreglos);

// invierte los valores del arreglo
// arreglos.reverse()
// console.log(arreglos);

// Transforma los datos del arreglo
// arreglos.map(function (elemento) {
//   console.log('$' + elemento);
// });

// arreglos.map( (elemento)=> {
//   console.log('$' + elemento);
// });
// let arreglito = arreglos.map((elemento) => {
//   return '$' + elemento;
// });

//Convierte un arreglo en un string segun el parametro dado
// let arreglito = arreglos.join('|');

//Convierte un arreglo en un string
// // let arreglito = arreglos.toString();
// console.log(arreglito);

//COnvierte un string en un arreglo segun el parametro para dividir
// arreglito = arreglito.split('|');
// console.log(arreglito);

// Adicionamos un elemento al arreglo en la ultima posicion
// arreglito.push(7)
// console.log(arreglito);

// Adicionamos un elemento al arreglo en la primera posicion
// arreglito.unshift(0)
// console.log(arreglito);


// elimina el ultimo elemento al arreglo
// let eliminar = arreglito.pop()
// console.log(arreglito);
// console.log(eliminar);

// console.table(arreglos);

// Recorremos todos los datos del arreglo
// arreglos.forEach((elemento) => {
//   console.log(elemento);

// });

// for (let index of arreglos) {
//   console.log(index);
// }

// Creacion de un erreglo con diferentes tipo de datos
// let arreglito = [
//   true,
//   'Texto',
//   {
//     nombre: 'pedro'
//   },
//   function () {
//     console.log('Hola Mundo');
//   }
// ]

// Ejecutar una funcion que se encuentra dentro de un arreglo
// arreglito[3]()

// metodo para filtrar los datos de un arreglo
// let arreglito = arreglos.filter((elemento) => {
//   return elemento >= 18
// });

// console.log(arreglito);

// Metodo para reducir los datos de un arreglo
// let total = arreglos.reduce((acumulador, valorActual) => {
//   return acumulador + valorActual;
// });

// console.log(total);

// Buscamos por lo menos alguna coincidencia dentro del arreglo
// let permisos = ['admin', 'user', 'admin', 'admin'];
// let esUsuario = permisos.some((elemento) => {
//   return elemento === 'user';
// });
// console.log(esUsuario);

// let notas = [2, 3, 4, 5, 4.5];
// console.log(notas);


// Buscamos todas las coincidencia dentro del arreglo
// let pasoMateria = notas.every((elemento) => {
//   return elemento >= 3
// });
// console.log(pasoMateria);


// Buscamos si existen una coincidencia dentro del arreglo
// let nombres = ['pablo', 'pedro', 'juan', 'martha'];
// let estaJuan = nombres.includes('juan');
// console.log(estaJuan);

// Spread metodo para unir dos arreglos
// let arreglo = [1, 2, 3, 4];
// let arreglo2 = [5, 6, 7, 8]

// let arreglo3 = [...arreglo, ...arreglo2, ...[10, 11, 23]];
// console.log(arreglo3);














// NEW

// function Persona() {
//   this.nombre = 'Juan';
//   this.apellido = 'Perez';
//   this.edad = 25;
//   this.nombreCompleto = function () {
//     console.log(this);
//     return `${this.nombre} ${this.apellido}, edad (${this.edad})`

//   }
// }

// let pedro = Persona;
// let juan = new Persona();

// console.log(pedro);
// console.log(juan);
// console.log(pedro.nombreCompleto());




// function Jugador(nombre) {
//   this.nombre = nombre;
//   this.pv = 100;
//   this.sp = 100;
//   this.curar = function (jugadorObjetivo) {
//     if (this.sp >= 40) {
//       this.sp -= 40;
//       jugadorObjetivo.pv += 20
//     } else {
//       console.info(`${this.nombre} no tiene sp`);
//     }
//     this.estado(jugadorObjetivo);

//   };
//   this.estado = function (jugadorObjetivo) {
//     console.info(this);
//     console.info(jugadorObjetivo);
//   };
//   this.tirarFlecha = function (jugadorObjetivo) {
//     if (jugadorObjetivo.pv >= 40) {
//       jugadorObjetivo.pv -= 40;
//     } else {
//       jugadorObjetivo.pv = 0;
//       console.error(`${jugadorObjetivo.nombre} murio...!`);
//     }
//     this.estado(jugadorObjetivo);
//   };
// }

// let gandalf = new Jugador('Gandalf');
// let legolas = new Jugador('Legolas');

// console.log(gandalf);
// console.log(legolas);
// gandalf.curar(legolas);
// legolas.tirarFlecha(gandalf)





// Destruturar
// let persona = {
//   name: 'Maya',
//   age: 30,
//   phone: '123',
//   address: {
//     zipcode: 1234,
//     street: 'rainbow',
//     number: 42
//   }
// }

// console.log(persona);
// var {
//   address: {
//     zipcode,
//     street,
//     number
//   }
// } = persona;
// console.log(zipcode, street, number);

// var {
//   zipcode,
//   street,
//   number
// } = persona.address;
// console.log(zipcode, street, number);




// let arreglo = new Array();
// let arreglo = [];

// let arreglo = [5, 4, 3, 2, 1];
// console.table(arreglo);
// console.log(arreglo);
// console.log(arreglo[0], arreglo[4], arreglo[5]);

// funciones
// invierte las posiciones del arreglo
// arreglo.reverse()
// console.log(arreglo);

// realiza transsofrmaciondes de datos
// arreglo = arreglo.map(function (elemento) {
//   elemento *= 2;
//   return elemento;
// });
// console.log(arreglo);

// combierte un arreglo en un string
// arreglo = arreglo.join('|');
// console.log(arreglo);

// Separar un string
// arreglo = arreglo.split('|');
// console.log(arreglo);

// Adicionar elementos al final
// arreglo.push('12');
// console.log(arreglo);

// Adicionar elementos al principio
// arreglo.unshift('0');
// console.log(arreglo);

// combierte un arreglo en un string
// console.log(arreglo.toString());

// eliminar elementos al principio
// let eliminado = arreglo.pop();
// console.log(arreglo, eliminado);

// Adicionar elementos en cualquier posicion
// arreglo.splice(1, 1, '10');
// console.log(arreglo);

// Adicionar elementos en cualquier posicion
// arreglo = arreglo.slice(1, 3);
// console.log(arreglo);

// Tamaño del arreglo
// console.log(arreglo.length);

// Adicionar elementos en cualquier posicion
// arreglo = [
//   true,
//   {
//     nombre: 'pedro',
//     apellido: 'fernandez'
//   },
//   function () {
//     console.log('estoy dentro');
//   },
//   function (persona) {
//     console.log(persona.nombre + ' ' + persona.apellido);

//   }
// ];
// console.log(arreglo[1]);
// arreglo[2]();
// arreglo[3](arreglo[1]);

//filter
// var edadEstudiantes = [17, 16, 18, 19, 21, 17];
// console.log(edadEstudiantes);
// var mayoresEdad = edadEstudiantes.filter(estudiante => estudiante > 18);
// console.log(mayoresEdad);

//Reduce
// const numeros = [5, 10, 15];
// const total = numeros.reduce((acumulador, valorActual) => acumulador + valorActual);
// console.log(total);

//forEach
// const emoticones = ['feliz', 'triste', 'bravo'];
// emoticones.forEach(emoticon => console.log(emoticon));

// some
// const privilegiosUsuarios = ['usuario', 'usuario', 'usuario', 'administrador'];
// const existeAdministrador = privilegiosUsuarios.some(elemento => elemento === 'administrador');
// console.log(existeAdministrador);

// every
// const notas = [3, 5, 4, 3, 5];
// const pasoMateria = notas.every(nota => nota >= 3);
// console.log(pasoMateria);

// includes
// const nombres = ['pedro', 'juan', 'martha', 'sandra', 'henry'];
// const estaMartha = nombres.includes('martha');
// console.log(estaMartha);


// SELECCIONAR ELEMENTOS DEL DOM
// console.log(document.getElementById('encabezado'));

// Obtener datos del elemento
// console.log(document.getElementById('encabezado').id);
// console.log(document.getElementById('encabezado').className);

// cambiar el CSS
// let encabezado = document.getElementById('encabezado');
// encabezado.style.background = '#333';
// encabezado.style.color = '#FFF';
// encabezado.style.padding = '20px';

// Cambiar Contenido
// encabezado.textContent = 'Los Mejores Cursos';
// otra forma
// encabezado.innerText = 'Los Mejores Cursos';


// Query selector con Id
// const encabezado = document.querySelector('#encabezado');


// Query Selector con Clase
// const subtitulo = document.querySelector('.subtitulo');

// Query selector con etiqueta
// const h1 = document.querySelector('h1');

// si hay distintos solo tomara el primero
// también se puede hacer nesting como css: ul li
// let imagenes = document.querySelector('.card img');

// console.log(h1.style.color = 'red');

// li:nth-child(3)  o li:last-child  o li:first-child
// let enlace = document.querySelector('#principal a:last-child');
// let enlace = document.querySelector('#principal a:nth-child(2)');
// let enlace = document.querySelector('#principal a:first-child');