// Promesas

// Ejercicio 1
function paso1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200]);
        }, 1500);
    });
}

function paso2(datos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([...datos, 300]);
        }, 500);
    });
}

function paso3(datosFinales) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Paso 3 ', datosFinales]);
        }, 100);
    });
}

paso1().then((data) => {
    paso2(data)
        .then((datos) => {
            paso3(datos)
                .then((response) => {
                    console.log(response)
                })
                .catch((data) => console.error(data));
        })
        .catch((data) => console.error(data));
}).catch((data) => console.error(data));

// Ejercicio 2
let empleados = [{
        id: 1,
        nombre: ' Julian'
    },
    {
        id: 2,
        nombre: ' Maria'
    },
    {
        id: 3,
        nombre: ' Pedro'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

function getEmpleado(Id) {
    return new Promise((resolve, reject) => {
        let empleado = empleados.find( empleado => empleado.id == Id)
        if(empleado != null){
            resolve(empleado);
        }else{
            reject("No existe el empleado");
        }
    });
}

function getSalarioByEmpleado(Empleado) {
    let salario = salarios.find( salario => salario.id == Empleado.id)
    return new Promise((resolve, reject) => {
        if(salario != null){
            resolve(salario);
        }else{
            reject("El empleado no tiene salario");
        }
        
    });
}

for(var i = 1; i <= 4; ++i){
    getEmpleado(i)
    .then((empleado) => {
        console.log(empleado);
        getSalarioByEmpleado(empleado)
            .then((salario) => {
                console.log(salario);
            }).catch((salario) => console.error(salario));
    }).catch(( empleado) => console.error(empleado));
}

// Ejercicio 3
// Realizar una funcion que retorne una promesa sumando dos numeros
// y que la suma se realize de 2 en 2 para obtener como resultado final 8
//Ejemplo suma(2,2) retorna 4; suma(2, resultado) retorna 6 .....