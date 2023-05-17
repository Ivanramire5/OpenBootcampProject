
// calcular el factorial de 10 utilizando un bucle while

let i = 0;
let unidadMaxima = 10;

while (i < unidadMaxima) {
    console.log(i);
    i++;
}
console.log("10")


// una bifurcación if

let a = 0
let b = 10

if (b > a) {
    console.log("Esto vale" + " " + b)
} else {
    console.log("Esto vale" + " " + a)
}


// una sentencia break

let unidades = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numero = null;

for (let i = 0; i < unidades.lenght; i++) {
    if (unidades[i] > 10) {
        numero = unidades[i];
        break;
    }
}
console.log("Esto da como resultado 10")