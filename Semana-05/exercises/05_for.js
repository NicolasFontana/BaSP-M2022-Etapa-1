// Create an array containing 5 words and iterate through that array using a JavaScript for loop to display an alert using each of the words.

console.log('\n************************************\n\nExercise 5: for\n\n')
var animals = ['dog', 'cat', 'fish', 'turtle', 'leopard']
for (var i = 0; i < animals.length; i++) {
  alert('Animal '+ [i] + ': ' + animals[i])
}

// To the above array, convert the first letter of each word to uppercase and display an alert for each modified word.

for (var i = 0; i < animals.length; i++) {
  animals[i] = animals[i].substring(0,1).toUpperCase() + animals[i].substring(1)
  alert('Animal '+ [i] + ': ' + animals[i])
}

// Create a variable called “sentence” that has an empty string, then go through the array from point a) with a for loop to save each word inside the sentence variable. At the end show a single alert with the complete chain.

var sentence = ''
for (var i = 0; i < animals.length; i++) {
  sentence += animals[i] + " "
}
alert('Animals: ' + sentence)

// Create an empty array and with a for loop of 10 repetitions. Fill the array with the repetition number, that is, at the end of the execution of the for loop there should be 10 elements inside the array, from number 0 to number 9. Show the final array in the browser console (use console .log).

console.log('------------------------------------ \n5.d')
var numbers = []
for (var i = 0; i < 10; i++) {
  numbers.push(i)
}
console.log('Array 0 to 9: ' + numbers)
