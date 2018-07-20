let nombre = 'CARLOS';
let apellido = 'Perez'
let edad;
let anioNacimiento = 1991;

let datos = [{
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
  }
]

// console.log(datos);


// // Invertir el nombre
nombre = nombre.split('').reverse().join('').toLowerCase()
// console.log(nombre.split(''));
// console.log(nombre);


// // Mayusculas apellido
apellido = apellido.toUpperCase();
// console.log(apellido);


// // Calcular Edad
function calculaEdad() {
  edad = 2018 - anioNacimiento
}

calculaEdad();
// console.log(edad);


// // Funcion que retorne nombre completo y edad
// // solrac (minuscula) PEREZ (mayuscula) y su edad es: 27
function nombreCompleto() {
  console.log(`${nombre} ${apellido} y su edad es: ${edad}`);
}

// // nombreCompleto();

// fitrar los id pares retornando un array
let arregloPar = datos.filter(function (item) {
  console.log(item);
  return item.id % 2 === 0;
});

// let arregloPar = [];
// for (let index = 0; index < datos.length; ++index) {
//   // console.log(index);
//   // console.log(datos[index]);
//   if (datos[index].id % 2 === 0) {
//     arregloPar.push(datos[index].id)
//   }
// }


console.log(arregloPar);

arregloPar = datos.filter((item) => item.id % 2 === 0);
console.log(arregloPar);

// Seleccionar elemnto por ID
// let $title = document.getElementById('title');

// Seleccionar elemntos por clase
let $items = document.getElementsByClassName('list-group-item');

// Seleccionar elemnto por clase css usando reglas de seleccion
// let $items = document.querySelector('div.row>ul');

// Seleccionar elemntos por clase css usando reglas de seleccion
// let $items = document.querySelectorAll('li:nth-child(even)');

// Seleccionar elemntos por por tags de html
// let $items = document.getElementsByTagName('li')

console.log($items);

for (let index = 0; index < $items.length; ++index) {
  let element = $items[index];
  // if (index % 2 === 1) {
  element.style.background = '#3f3f3f';
  element.style.color = 'white';
  // }
}


let $descripcion = document.getElementById('description');
// $descripcion.innerHTML = 'Breve'
let valor = 'Algo'
$descripcion.innerText = `
<ul>
<li> ${valor} </li>
</ul>
`
console.log($descripcion);
$descripcion.innerHTML = 'Algo'

let intervalo = setInterval(function () {
  console.log('Intervalo');
}, 1000);

setTimeout(() => {
  console.log('Entro aqui...!');
  clearInterval(intervalo)
}, 5000);