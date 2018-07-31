var p1 = "papas";
var p2 = "tortas";
var pre1  = 2.5;
var pre2 = 12.5;


var html = 
"<ul>"+
"<li>"+p1+"</li>"+
"<li>"+pre1+"</li>"+
"<li>"+p2+"</li>"+
"<li>"+pre2+"</li>"+
"</ul>"


var html2 = `<ul>
<li>${p1}</li>
<li>${pre1}</li>
<li>${p2}</li>
<li>${pre2}</li>
</ul>
`

var $app = document.getElementById("app");
console.log($app)
$app.innerHTML = html + html2;

var a = 10;
var b = a;
console.log(a);
console.log(b);
a = 20;
console.log(a);
console.log(b);

let pedro = {
    edad : 25
};

let luis = pedro;
console.log(pedro);
console.log(luis);

pedro.edad = 30;
console.log(pedro);
console.log(luis);

let luis1 = {
    
}

luis1.edad = pedro.edad;
console.log(pedro);
console.log(luis1);
/*
document.body.style.backgroundColor = "red";
var change = function(){
    if (!col){
        document.body.style.backgroundColor = "red";
    }else{
        document.body.style.backgroundColor = "green";
    }
    col = !col;
    setTimeout(change, 100);
}

var col = true
setTimeout(change, 100);*/


var menor5 = function(a){
    return a <5
}
let esmayor = (a) => a>5; 
console.log(menor5(15))


let persona = {
    nombre : 'Sergio',
    apellido : 'Diaz',
    nombreCompleto : function(){
        console.log(this.nombre + " "+ this.apellido);
    },
    direccion : {
        ciudad : 'Bogota',
        pais : 'Colombia',
        lugarCompleto: function(){
            let numero1 = 6;
            let numero2 = 60;
            function sumar (){
                console.log(this);
            }
            sumar()
        }
    }
}
