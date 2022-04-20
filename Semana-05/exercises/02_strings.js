// Create a variable of type string with at least 10 characters and convert all text to uppercase (use toUpperCase).

console.log('\n************************************\n\nExercise 2: Strings \n\n2.a')
var fullName = 'Nicolas Fontana'
console.log('Full name in capital letters: ' +fullName.toUpperCase())

// Create a variable of type string with at least 10 characters and generate a new string with the first 5 characters saving the result in a new variable (use substring).

console.log('------------------------------------ \n2.b')
var greetings = 'Hello world!'
var shortGreeting = greetings.substring(0,5)
console.log('First 5 characters: ' + shortGreeting)

// Create a variable of type string with at least 10 characters and generate a new string with the last 3 characters saving the result in a new variable (use substring).

console.log('------------------------------------ \n2.c')
var str = 'This is a string'
var substr = str.substring(str.length-3,str.length)
console.log('Last 3 characters' + substr)

// Create a variable of type string with at least 10 characters and generate a new string with the first letter in uppercase and the rest in lowercase. Save the result in a new variable (use substring, toUpperCase, toLowerCase and the + operator).

console.log('------------------------------------ \n2.d')
var fruits = 'apPle, BanAna, peAr.'
var fruitsA = fruits.substring(0,1).toUpperCase() + fruits.substring(1,fruits.length).toLowerCase()
console.log('First letter in uppercase and the rest in lowercase: ' + fruitsA)


// Create a variable of type string with at least 10 characters and some white space. Find the position of the first white space and store it in a variable (use indexOf).

console.log('------------------------------------ \n2.e')
var textA = 'This is a string data type'
var index = textA.indexOf(" ")
console.log('Position of the first white space: ' + index)

// Create a variable of type string with at least 2 words long (10 characters and some space in between). Use the methods from the previous exercises to generate a new string that has the first letter of both words in uppercase and the other letters in lowercase (use indexOf, substring, toUpperCase, toLowerCase, and the + operator).

console.log('------------------------------------ \n2.f')
var country = 'soUth kOrea'
var indexWhiteSpace = country.indexOf(' ')
var countryFixed = country.substring(0,1).toUpperCase() + country.substring(1, indexWhiteSpace).toLowerCase() + country.substring(indexWhiteSpace, indexWhiteSpace + 2).toUpperCase() + country.substring(indexWhiteSpace + 2).toLowerCase()
console.log('Correctly written: ' + countryFixed)