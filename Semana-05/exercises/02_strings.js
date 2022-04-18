// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var fullName = 'Nicolas Fontana'
console.log(fullName.toUpperCase())

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var greetings = 'Hello world!'
var shortGreeting = greetings.substring(0,5)
console.log(shortGreeting)

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var str = 'This is a string'
var substr = str.substring(str.length-3,str.length)
console.log(substr)

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var frutas = 'manzaNa, BanAna, pERa.'
var fruits = frutas.substring(0,1).toUpperCase() + frutas.substring(1,frutas.length).toLowerCase()
console.log(fruits)


// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var date = 'This is a string data type'
var index = date.indexOf(" ")
console.log(index)

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var nz =  'nueVa zelAnda'
var indexN = nz.indexOf('n')
var indexZ = nz.indexOf('z')

var NZ = nz.substring(indexN, indexN + 1).toUpperCase() + nz.substring(indexN + 1, indexZ).toLowerCase() + nz.substring(indexZ, indexZ + 1).toUpperCase() + nz.substring(indexZ + 1, nz.length).toLowerCase()

console.log(NZ)