// Create a sum function that receives two numeric values and returns the result. Execute the function and save the result in a variable, displaying the value of said variable in the browser console.

console.log('\n************************************\n\nExercise 6: functions \n\n6.a')
function addA(num1, num2) {
  return num1 + num2
}

var resultAdd = addA(3,5)
console.log(resultAdd)

// To the previous sum function, add a validation to check if any of the parameters is not a number, display an alert clarifying that one of the parameters has an error and return the NaN value as the result.

console.log('------------------------------------ \n6.b')
function addB (num1, num2) {
  if ((typeof num1 !== 'number') || typeof num2 !== 'number') {
    alert('One of the parameters has an error.')
    return 'NaN'
  } else {
    return num1 + num2
  }
}

console.log(addB(2,3))

//Create a validate integer function that takes a number as a parameter and returns true if it's an integer.

console.log('------------------------------------ \n6.c')
function validateInteger (num) {
    return Number.isInteger(num)
}

console.log(validateInteger(2))

//To the sum function of exercise 6b) add a call that validates that the numbers are integers. If there are decimals, display an alert with the error and return the number converted to an integer (rounded). Reuse validateInteger / if for the math.round of decimals

console.log('------------------------------------ \n6.d')
function addD(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    alert('One or both parameters are not a number.')
    return 'NaN'
  } else {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
      return num1 + num2
    } else {
      alert('One or both parameters is a decimal.')
      return (Math.round(num1 + num2));
    }
  }
}
console.log(addD(1, 'hola'))
console.log(addD (1, 2.6))
console.log(addD(2, 4))

//Convert the validation from exercise 6d) into a separate function and call it inside the sum function testing that everything still works the same.

console.log('------------------------------------ \n6.e')

function addE(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    alert('One or both parameters are not a number.')
    return 'NaN'
  } else {
    if (validateInteger(num1) && validateInteger(num2)) {
      return num1 + num2
    } else {
      alert('One or both parameters is a decimal.')
      return (Math.round(num1 + num2))
    }
  }
}

console.log(addE(1, 'hola'))
console.log(addE(1, 2.6))
console.log(addE(2, 4))

