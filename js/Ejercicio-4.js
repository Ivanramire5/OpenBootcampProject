
// Cadena de texto con tu nombre

let nombre = "Iván";
console.log (nombre)

// Cadena de texto con tu apellido

let apellido = "Ramirez";
console.log (apellido)

// Cadena de texto que concatene todo

let estudiante = " ";
console.log (nombre.concat(estudiante, apellido))

// Cadena en mayuscula

let estudianteMayus = "Iván Ramirez"
console.log(estudianteMayus.toUpperCase())

// Cadena en minuscula

let estudianteMinus = "Iván Ramirez"
console.log(estudianteMinus.toLowerCase())

// Longitud de la cadena

let estudianteLongitud = "Iván Ramirez"
console.log(estudianteLongitud.length)

// Una variable que contenga la primera letra del Nombre

let letraNombre = "Iván";
console.log(letraNombre[0])

// Otra variable que contenga la última letra del Apellido

let letraApellido = "Ramirez";
console.log(letraApellido[6])

// Una cadena de texto que elimine los espacios de la variable "estudiante"

let eliminarPalabras = "  Iván Ramirez  "
console.log(eliminarPalabras.trim());

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

var booleana = "Iván Ramirez"
console.log(booleana.startsWith("Iván"))
