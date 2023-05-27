
// Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompras = ["arroz", "carne", "fideos", "galletas", "cereales"]
console.log(listaCompras)

// Modifica la lista de la compra y añádele "Aceite de Girasol"

const listaCompras2 = ["Aceite de girasol"]
const listaCompras3 = listaCompras.concat(listaCompras2)
console.log(listaCompras3)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaCompras3.pop()
console.log(listaCompras3)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPeliculas = [
    {titulo: "Pulp Fiction", director: "Quentin Tarantino", fecha: "21 de Mayo de 1994"},
    {titulo: "Scarface", director: "Brian De Palma", fecha: "9 de Febrero de 1984"},
    {titulo: "Back To The Future", director: "Robert Zemeckis", fecha: "26 de Diciembre de 1985"}
]
console.log(listaPeliculas)

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const fechas = listaPeliculas.filter(fecha => listaPeliculas < "2010")
console.log(fechas)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = "director";
const nombresDeDirectores = listaPeliculas.map(director => {
    return director
})
console.log(nombresDeDirectores)

//  Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const peliculas = "peliculas";
const nombresDePeliculas = listaPeliculas.map(peliculas => {
    return peliculas
})
console.log(nombresDePeliculas)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const listaUno = [
    {director: "Quentin Tarantino"},
    {director: "Brian De Palma"},
    {director: "Robert Zemeckis"}
]
const listaDos = [
    {titulos: "Pulp Fiction"},
    {titulos: "Scarface"},
    {titulos: "Back To The Future"}
]
const listaTres = listaUno.concat(listaDos)
console.log(listaTres)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaCuatro = [...listaUno, ...listaDos]
console.log(listaCuatro)