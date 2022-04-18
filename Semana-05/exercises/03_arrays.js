// Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] show by console the months 5 and 11 (use console.log).

var arrA = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(arrA[4])
console.log(arrA[10])

// Sort the month array alphabetically and display it on the console (use sort).

var arrB = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(arrB.sort())

// Add an element to the beginning and end of the array (use unshift and push).

arrC = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

arrC.push('Last')
arrC.unshift('First')

console.log(arrC)

// Remove an element from the beginning and end of the array (use shift and pop).

var arrD = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

arrD.shift()
arrD.pop()

console.log(arrD)

// Reverse the order of the array (use reverse).

var arrE = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 

console.log(arrE.reverse())

// Join all the elements of the array into a single string where each month is separated by a hyphen - (use join).

var arrF = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 

console.log(arrF.join(" - "))

// Create a copy of the month array containing May through November (use slice).

var arrayG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(arrayG.slice(4))
