// Create a variable of type string with at least 10 characters and convert all text to uppercase (use toUpperCase).

var fullName = 'Nicolas Fontana'
console.log(fullName.toUpperCase())

// Create a variable of type string with at least 10 characters and generate a new string with the first 5 characters saving the result in a new variable (use substring).

var greetings = 'Hello world!'
var shortGreeting = greetings.substring(0,5)
console.log(shortGreeting)

// Create a variable of type string with at least 10 characters and generate a new string with the last 3 characters saving the result in a new variable (use substring).

var str = 'This is a string'
var substr = str.substring(str.length-3,str.length)
console.log(substr)

// Create a variable of type string with at least 10 characters and generate a new string with the first letter in uppercase and the rest in lowercase. Save the result in a new variable (use substring, toUpperCase, toLowerCase and the + operator).

var fruits = 'apPle, BanAna, peAr.'
var fruitsA = fruits.substring(0,1).toUpperCase() + fruits.substring(1,fruits.length).toLowerCase()
console.log(fruitsA)


// Create a variable of type string with at least 10 characters and some white space. Find the position of the first white space and store it in a variable (use indexOf).

var textA = 'This is a string data type'
var index = textA.indexOf(" ")
console.log(index)

// Create a variable of type string with at least 2 words long (10 characters and some space in between). Use the methods from the previous exercises to generate a new string that has the first letter of both words in uppercase and the other letters in lowercase (use indexOf, substring, toUpperCase, toLowerCase, and the + operator).

var nz =  'neW zealAnd'
var indexN = nz.indexOf('n')
var indexZ = nz.indexOf('z')

var NZ = nz.substring(indexN, indexN + 1).toUpperCase() + nz.substring(indexN + 1, indexZ).toLowerCase() + nz.substring(indexZ, indexZ + 1).toUpperCase() + nz.substring(indexZ + 1, nz.length).toLowerCase()
console.log(NZ)