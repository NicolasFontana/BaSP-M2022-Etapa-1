// Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] show by console the months 5 and 11 (use console.log).

console.log('\n************************************\n\nExercise 3: Arrays \n\n3.a')
var monthsA = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log('Month 5: ' + monthsA[4])
console.log('Month 11: ' + monthsA[10])

// Sort the month array alphabetically and display it on the console (use sort).

console.log('------------------------------------ \n3.b')
var monthsB = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log('Sorted array: ' + monthsB.sort())

// Add an element to the beginning and end of the array (use unshift and push).

console.log('------------------------------------ \n3.c')
var monthsC = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

monthsC.push('Last')
monthsC.unshift('First')

console.log(monthsC)

// Remove an element from the beginning and end of the array (use shift and pop).

console.log('------------------------------------ \n3.d')
var monthsD = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

monthsD.shift()
monthsD.pop()

console.log(monthsD)

// Reverse the order of the array (use reverse).

console.log('------------------------------------ \n3.e')
var monthsE = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 

console.log(monthsE.reverse())

// Join all the elements of the array into a single string where each month is separated by a hyphen - (use join).

console.log('------------------------------------ \n3.f')
var monthsF = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 

console.log('Join method: ' + monthsF.join(" - "))

// Create a copy of the month array containing May through November (use slice).

console.log('------------------------------------ \n3.g')
var monthsG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log('May onwards: ' + monthsG.slice(4))
