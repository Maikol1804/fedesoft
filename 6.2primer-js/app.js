let producto = 'papas';
let producto2 = 'Tortas';
let precio1 = 2.5;
let precio2 = 12.5;

// Strings a lo viejo

// var html =
//   '<ul>' +
//   '<li>' + producto + '</li>' +
//   '<li>' + precio1 + '</li>' +
//   '<li>' + producto2 + '</li>' +
//   '<li>' + precio2 + '</li>' +
//   '</ul>';

// Nueva Forma String literals
let html =
  `<ul>
  <li>  ${producto}  </li>
  <li>  ${precio1}  </li>
  <li>  ${producto2}  </li>
    <li>  ${precio2}  </li>
  </ul>`;


let $app = document.getElementById('app');
console.log($app);
$app.innerHTML = html;

// Asincronia

for (let index = 0; index < 8000; ++index) {
  console.log('hola');
}

function btnSaluda() {
  console.log('Hola Mundo');
}


// // Paso por valor
let a = 10;
let b = a;

console.log(a);
console.log(b);

a = 20;
console.log(a);
console.log(b);

// // Paso por referencia

let pedro = {
  edad: 25
};

let luis = {};
console.log(typeof luis);
console.log('Pedro: ', pedro);
console.log('Luis', luis);

luis.edad = pedro.edad;
pedro.edad = 35;

console.log('Pedro: ', pedro);
console.log('Luis', luis);

// // Notacion de punto y corchete

let persona = {
  nombre: 'Pedro',
  apellido: 'Suarez',
  edad: 25,
  direccion: {
    pais: 'Colombia',
    ciudad: 'Bogota',
    edificio: {
      nombre: 'Universidad Libre',
      telefono: '222-3333'
    }
  }
}

console.log(persona.direccion.edificio);
let telefono = persona.direccion.edificio.telefono;
console.log(telefono);

// //Notacion Corchete
let campo = "";
let campo = "edad";
console.log(persona['nombre']);
console.log(persona['campo']);

function obtenerNombre() {
  console.log('pedro');
}

obtenerNombre();

function nombreCompleto(nombre = 'Vacio', apellido = 'Vacio') {
  console.log(`Nombre COmpleto: ${nombre} ${apellido}`);
}

let nombre;
let apellido;
// nombreCompleto(nombre || 'Julian', apellido || 'Rodriguez');
nombreCompleto(nombre, apellido);


function multiplicar(a = 0, b = 0) {
  console.log('El total es: ', a * b);
}

let numero;
let numero2;

multiplicar(numero, numero2);

var a = 8;
var b = 10;
console.log(this);


let multiplicar = function (a, b) {
  // console.log(arguments);
  // var a = 10;
  // var b = 3;
  // console.log(this);
  console.log(a * b);
}

console.log(multiplicar(3, 5));


function obtenerAleatorio() {
  return Math.floor(Math.random() * 10);
}

console.log(obtenerAleatorio());

function obtenerDatos() {
  return {
    nombre: 'Juan',
    apellido: 'Lisboa'
  }
}

console.log(obtenerDatos);

// Funciones
let a = 30;

function primeraFuncion() {
  let a = 20;
  console.log(a);
  console.log(arguments);
}


primeraFuncion('casa', 'pedro');

// retornar valores
function obtenerAleatorio() {
  return Math.random();
}

function obtenerNombre() {
  return 'Juan';
}

function esMayor05() {
  if (obtenerAleatorio() > 0.5) {
    return true;
  } else {
    return false;
  }
  // return obtenerAleatorio() > 0.5 ? true : flase;
}

function crearPersona(nombre = "Carlos", apellido = "Fernandez") {
  return {
    nombre: nombre,
    apellido: apellido
  }
}

let persona = crearPersona("Julian", "Perez");
console.log(persona.nombre);
console.log(persona.apellido);



function esMayor05() {
  let numero = Math.floor(Math.random() * 10);
  if (numero > 5) {
    return true;
  } else {
    return false;
  }

  return numero > 5 || numero < 7 ? true : false;
}

console.log(() => 'Tetxo');


let esMayor05 = () => {
  let numero = Math.floor(Math.random() * 10);
  return numero > 5 || numero < 7 ? true : false;
}


console.log(esMayor05());
console.log(esMayor05());
console.log(esMayor05());
console.log(esMayor05());
console.log(esMayor05());
console.log(esMayor05());

// THIS
console.log(this);
let nombre = "Juan Carlos";
let apellido = "Rodriguez";

let persona = {
  nombre: 'Maria',
  apellido: 'Lisboa',
  imprimirNombre: function () {
    console.log(this);
    console.log(`Nombre Completo: ${nombre} ${apellido}`);
    // console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);
  },
  direccion: {
    pais: 'Colombia',
    ciudad: 'Bogota',
    obtenerPais: function () {
      console.log(this);
      let self = this;
      var nuevaDireccion = function () {
        console.log(self);

      }
      nuevaDireccion();
    }
  }
}
persona.imprimirNombre();
persona.direccion.obtenerPais();