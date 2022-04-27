// Nodes

var formName = document.getElementById('form-name')
var validName = document.getElementById('valid-name')
var formLastName = document.getElementById('form-last-name')
var validLastName = document.getElementById('valid-last-name')
var formDNI = document.getElementById('form-dni')
var validDNI = document.getElementById('valid-dni')
var formDate = document.getElementById('form-date')
var validDate = document.getElementById('valid-date')
var formPhone = document.getElementById('form-phone')
var validPhone = document.getElementById('valid-phone')
var formAddress = document.getElementById('form-address')
var validAddress = document.getElementById('valid-address')
var formCity = document.getElementById('form-city')
var validCity = document.getElementById('valid-city')
var formZipCode = document.getElementById('form-zip-code')
var validZipCode = document.getElementById('valid-zip-code')
var formEmail = document.getElementById('form-email')
var validEmail = document.getElementById('valid-email')
var formPassword = document.getElementById('form-password')
var validPassword = document.getElementById('valid-password')
var formRepeatPassword = document.getElementById('form-repeat-password')
var validRepeatPassword = document.getElementById('valid-repeat-password')

var btnSignUp = document.getElementById('btn-sign-up')
var signUpForm = document.getElementById('form-sign-up')
var validationResult = document.getElementById('validation-result-sign-up')

// Utilities

function charIsLetter(char) {
  if (typeof char !== 'string') {
    return false
  }
  return char.toLowerCase() !== char.toUpperCase()
}

function containNumbers(str) {
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  for (var i = 0; i < str.length; i++) {
    if (nums.includes(str[i])) {
      return true
    }
  }
  return false
}

function containSpecialChar (specialChar) {
  for (var i = 0; i < specialChar.length; i++) {
    if (!charIsLetter(specialChar[i]) && isNaN(specialChar[i])) {
      return true
    }
  }
}

// Validate name

function validateName(name) {
  if (name.length < 3) {
    return false
  }else if (containNumbers(name)) {
    return false
  } else if (containSpecialChar(name)) {
    return false
  } else {
    return true
  }
}

// Validate last name

function validateLastName(name) {
  if (name.length < 3) {
    return false
  }else if (containNumbers(name)) {
    return false
  } else if (containSpecialChar(name)) {
    return false
  } else {
    return true
  }
}

// Validate DNI

function validateDNI(num) {
  if (num.length <= 7) {
    return false
  } else if (!containNumbers(num)) {
    return false
  } else {
    return true
  }
}

// Validate date

function validateAge(birthDate) {
  var today = new Date();
  var birtday = new Date(birthDate);
  var age = today.getFullYear() - birtday.getFullYear();
  var month = today.getMonth() - birtday.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birtday.getDate()+1)) {
      age--;
  }
  return age
}

function validateDate(birthDate) {
  if (validateAge(birthDate) < 18){
    return false
  } else if (birthDate === '') {
    return false
  } else {
    return true
  }
}

// Validate phone

function validatePhone(num) {
  if (num.length <= 7) {
    return false
  } else if (!containNumbers(num)) {
    return false
  } else {
    return true
  }
}

// Validate address

function testAddress(address) {
  var numbers = ['1','2','3','4','5','6','7','8','9','0']
  var nums = 0
  var char = 0
  var whiteSpace = 0
  for (var i = 0; i < address.length; i++) {
    if (numbers.includes(address[i])) {
      nums++
    } else if (' '.includes(address[i])) {
      whiteSpace++
    } else {
      char++
    }
  }
  if (nums > 0 && char > 0 && whiteSpace > 0) {
    return true
  } else {
    return false
  }
}

function validateAddress(address) {
  if (address.length < 5) {
    return false
  } else if (testAddress(address)) {
    return true
  } else {
    return false
  }
}

// Validate city

function validateCity(city) {
  if (city.length < 4) {
    return false
  } else {
    return true
  }
}

// Validate zip code

function validateZipCode(zipCode) {
  for (var i = 0; i < zipCode.length; i++) {
    if (isNaN(zipCode[i])) {
      return false
    }
  }
  if (zipCode.length <= 5 && zipCode.length >= 4) {
    return true
  }
}

// Validate email

function validateEmail(email) {
  var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expReg.test(formEmail.value)
}

// Validate password

function validatePassword(password) {
  var hasLetters = false
  var hasNumbers = false
  if (password.length >= 8) {
    for (var i = 0; i < password.length; i++){
      if (charIsLetter(password[i])) {
        hasLetters = true
      } else if (!isNaN(password[i])) {
        hasNumbers = true
      }
      if (!charIsLetter(password[i]) && isNaN(password[i])) {
        return false
      }
      if (hasLetters && hasNumbers) {
        return true
      }
    }
  } else {
    return false
  }
}

// Validate repeat password

function validateRepeatPassword(password1, repeatPassword) {
  if (repeatPassword === password1) {
    return true
  } else {
    return false
  }
}

// Global validate

function validate() {
  validateName(formName.value)
  validateLastName(formLastName.value)
  validateDNI(formDNI.value)
  validatePhone(formPhone.value)
  validateDate(formDate.value)
  validateAddress(formAddress.value)
  validateCity(formCity.value)
  validateZipCode(formZipCode.value)
  validateEmail(formEmail.value)
  validatePassword(formPassword.value)
  validateRepeatPassword(formRepeatPassword.value, formPassword.value)

  return validateName(formName.value) && validateLastName(formLastName.value) && validateDNI(formDNI.value) && validateDate(formDate.value) && validatePhone(formPhone.value) && validateAddress(formAddress.value) && validateCity(formCity.value) && validateZipCode(formZipCode.value) && validateEmail(formEmail.value) && validatePassword(formPassword.value) && validateRepeatPassword(formRepeatPassword.value, formPassword.value)
}


// Submit event

signUpForm.addEventListener('submit', function(event) {
  event.preventDefault()
})

// Click event

btnSignUp.addEventListener('click', showResultsSignUp)

// Blur and focus event

// Name

function nameIsValid(){
  if(validateName(formName.value)) {
    formName.classList.remove('is-invalid')
    formName.classList.add('is-valid')
    validName.innerHTML = ""
  } else {
    formName.classList.remove('is-valid')
    formName.classList.add('is-invalid')
    validName.innerHTML = "<p>Only letters and must have more than 3 letters</p>"
  }
}

formName.addEventListener('blur', nameIsValid )

formName.addEventListener('focus', function() {
  formName.classList.remove('is-invalid')
  formName.classList.remove('is-valid')
  validName.innerHTML = ""
})

// Last name

function lastNameIsValid() {
  if(validateLastName(formLastName.value)) {
    formLastName.classList.remove('is-invalid')
    formLastName.classList.add('is-valid')
    validLastName.innerHTML = ""
  } else {
    formLastName.classList.remove('is-valid')
    formLastName.classList.add('is-invalid')
    validLastName.innerHTML = "<p>Only letters and must have more than 3 letters</p>"
  }
}

formLastName.addEventListener('blur', lastNameIsValid)

formLastName.addEventListener('focus', function() {
  formLastName.classList.remove('is-invalid')
  formLastName.classList.remove('is-valid')
  validLastName.innerHTML = ""
})

// DNI

function dniIsValid() {
  if(validateDNI(formDNI.value)) {
    formDNI.classList.remove('is-invalid')
    formDNI.classList.add('is-valid')
    validDNI.innerHTML = ""
  } else {
    formDNI.classList.remove('is-valid')
    formDNI.classList.add('is-invalid')
    validDNI.innerHTML = "<p>Only numbers and must have more than 7</p>"
  }
}

formDNI.addEventListener('blur', dniIsValid)

formDNI.addEventListener('focus', function() {
  formDNI.classList.remove('is-invalid')
  formDNI.classList.remove('is-valid')
  validDNI.innerHTML = ""
})

// Date

function dateIsValid() {
  if(validateDate(formDate.value)) {
    formDate.classList.remove('is-invalid')
    formDate.classList.add('is-valid')
    validDate.innerHTML = ""
  } else {
    formDate.classList.remove('is-valid')
    formDate.classList.add('is-invalid')
    validDate.innerHTML = "<p>Must be over 18 years old</p>"
  }
}

formDate.addEventListener('blur', dateIsValid)

formDate.addEventListener('focus', function() {
  formDate.classList.remove('is-invalid')
  formDate.classList.remove('is-valid')
  validDate.innerHTML = ""
})

// Phone

function phoneIsValid() {
  if(validatePhone(formPhone.value)) {
    formPhone.classList.remove('is-invalid')
    formPhone.classList.add('is-valid')
    validPhone.innerHTML = ""
  } else {
    formPhone.classList.remove('is-valid')
    formPhone.classList.add('is-invalid')
    validPhone.innerHTML = "<p>Please enter a valid phone number</p>"
  }
}

formPhone.addEventListener('blur', phoneIsValid)

formPhone.addEventListener('focus', function() {
  formPhone.classList.remove('is-invalid')
  formPhone.classList.remove('is-valid')
  validPhone.innerHTML = ""
})

// Address

function addressIsValid() {
  if(validateAddress(formAddress.value)) {
    formAddress.classList.remove('is-invalid')
    formAddress.classList.add('is-valid')
    validAddress.innerHTML = ""
  } else {
    formAddress.classList.remove('is-valid')
    formAddress.classList.add('is-invalid')
    validAddress.innerHTML = "<p>Enter a valid address</p>"
  }
}

formAddress.addEventListener('blur', addressIsValid)

formAddress.addEventListener('focus', function() {
  formAddress.classList.remove('is-invalid')
  formAddress.classList.remove('is-valid')
  validAddress.innerHTML = ""
})

// City

function cityIsValid() {
  if(validateCity(formCity.value)) {
    formCity.classList.remove('is-invalid')
    formCity.classList.add('is-valid')
    validCity.innerHTML = ""
  } else {
    formCity.classList.remove('is-valid')
    formCity.classList.add('is-invalid')
    validCity.innerHTML = "<p>Must have more than 3 letters</p>"
  }
}

formCity.addEventListener('blur', cityIsValid)

formCity.addEventListener('focus', function() {
  formCity.classList.remove('is-invalid')
  formCity.classList.remove('is-valid')
  validCity.innerHTML = ""
})

// Zip code

function zipCodeIsValid() {
  if(validateZipCode(formZipCode.value)) {
    formZipCode.classList.remove('is-invalid')
    formZipCode.classList.add('is-valid')
    validZipCode.innerHTML = ""
  } else {
    formZipCode.classList.remove('is-valid')
    formZipCode.classList.add('is-invalid')
    validZipCode.innerHTML = "<p>Must have between 4 and 5 numbers</p>"
  }
}

formZipCode.addEventListener('blur', zipCodeIsValid)

formZipCode.addEventListener('focus', function() {
  formZipCode.classList.remove('is-invalid')
  formZipCode.classList.remove('is-valid')
  validZipCode.innerHTML = ""
})

// Email

function emailIsValid() {
  if(validateEmail(formEmail.value)) {
    formEmail.classList.remove('is-invalid')
    formEmail.classList.add('is-valid')
    validEmail.innerHTML = ""
  } else {
    formEmail.classList.remove('is-valid')
    formEmail.classList.add('is-invalid')
    validEmail.innerHTML = "<p>Enter a valid email</p>"
  }
}

formEmail.addEventListener('blur', emailIsValid)

formEmail.addEventListener('focus', function() {
  formEmail.classList.remove('is-invalid')
  formEmail.classList.remove('is-valid')
  validEmail.innerHTML = ""
})

// Password

function passwordIsValid() {
  if(validatePassword(formPassword.value)) {
    formPassword.classList.remove('is-invalid')
    formPassword.classList.add('is-valid')
    validPassword.innerHTML = ""
  } else {
    formPassword.classList.remove('is-valid')
    formPassword.classList.add('is-invalid')
    validPassword.innerHTML = "<p>At least 8 characters, made up of letters and numbers</p>"
  }
}

formPassword.addEventListener('blur', passwordIsValid)

formPassword.addEventListener('focus', function() {
  formPassword.classList.remove('is-invalid')
  formPassword.classList.remove('is-valid')
  validPassword.innerHTML = ""
})

// Repeat password

function repeatPasswordIsValid() {
  if (validatePassword(formPassword.value)) {
    if(validateRepeatPassword(formRepeatPassword.value, formPassword.value)) {
      formRepeatPassword.classList.remove('is-invalid')
      formRepeatPassword.classList.add('is-valid')
      validRepeatPassword.innerHTML = ""
    } else {
      formRepeatPassword.classList.remove('is-valid')
      formRepeatPassword.classList.add('is-invalid')
      validRepeatPassword.innerHTML = "<p>Must match the password</p>"
    }
  } else {
    formRepeatPassword.classList.remove('is-valid')
    formRepeatPassword.classList.add('is-invalid')
    validRepeatPassword.innerHTML = "<p>Must match the password</p>"
  }
}

formRepeatPassword.addEventListener('blur', repeatPasswordIsValid)

formRepeatPassword.addEventListener('focus', function() {
  formRepeatPassword.classList.remove('is-invalid')
  formRepeatPassword.classList.remove('is-valid')
  validRepeatPassword.innerHTML = ""
})

// Results sign up

function showResultsSignUp() {
  nameIsValid()
  lastNameIsValid()
  dniIsValid()
  dateIsValid()
  phoneIsValid()
  addressIsValid()
  cityIsValid()
  zipCodeIsValid()
  emailIsValid()
  passwordIsValid()
  repeatPasswordIsValid()
  if (validate()) {
    validationResult.innerHTML = `<div class="validationSuccessContainer"><p>Successful sign up</p></div>`
  } else {
    validationResult.innerHTML = `<div class="validationErrorContainer"><p>Please correct the errors</p></div>`
  }
  if (validateName(formName.value)) {
    var p1 = document.createElement('p')
    p1.setAttribute("class", "msg-success")
    p1.innerHTML = `Name: ${formName.value}`
    validationResult.appendChild(p1)
  } else {
    var p1 = document.createElement('p')
    p1.setAttribute("class", "msg-error")
    p1.innerHTML = "Invalid name. Only letters and must have more than 3 letters"
    validationResult.appendChild(p1)
  }
  if (validateLastName(formLastName.value)) {
    var p2 = document.createElement('p')
    p2.setAttribute("class", "msg-success")
    p2.innerHTML = `Last name: ${formLastName.value}`
    validationResult.appendChild(p2)
  } else {
    var p2 = document.createElement('p')
    p2.setAttribute("class", "msg-error")
    p2.innerHTML = "Invalid last name. Only letters and must have more than 3 letters"
    validationResult.appendChild(p2)
  }
  if (validateDNI(formDNI.value)) {
    var p3 = document.createElement('p')
    p3.setAttribute("class", "msg-success")
    p3.innerHTML = `DNI: ${formDNI.value}`
    validationResult.appendChild(p3)
  } else {
    var p3 = document.createElement('p')
    p3.setAttribute("class", "msg-error")
    p3.innerHTML = "Invalid DNI. Only numbers and must have more than 7"
    validationResult.appendChild(p3)
  }
  if (validateDate(formDate.value)) {
    var p4 = document.createElement('p')
    p4.setAttribute("class", "msg-success")
    p4.innerHTML = `Valid birthday`
    validationResult.appendChild(p4)
  } else {
    var p4 = document.createElement('p')
    p4.setAttribute("class", "msg-error")
    p4.innerHTML = "Invalid birthday. Must be over 18 years old"
    validationResult.appendChild(p4)
  }
  if (validatePhone(formPhone.value)) {
    var p5 = document.createElement('p')
    p5.setAttribute("class", "msg-success")
    p5.innerHTML = `Telephone number: ${formPhone.value}`
    validationResult.appendChild(p5)
  } else {
    var p5 = document.createElement('p')
    p5.setAttribute("class", "msg-error")
    p5.innerHTML = "Invalid telephone number. Please enter a valid phone number"
    validationResult.appendChild(p5)
  }
  if (validateAddress(formAddress.value)) {
    var p6 = document.createElement('p')
    p6.setAttribute("class", "msg-success")
    p6.innerHTML = `Address: ${formAddress.value}`
    validationResult.appendChild(p6)
  } else {
    var p6 = document.createElement('p')
    p6.setAttribute("class", "msg-error")
    p6.innerHTML = "Invalid address. Enter a valid address"
    validationResult.appendChild(p6)
  }
  if (validateCity(formCity.value)) {
    var p7 = document.createElement('p')
    p7.setAttribute("class", "msg-success")
    p7.innerHTML = `City: ${formCity.value}`
    validationResult.appendChild(p7)
  } else {
    var p7 = document.createElement('p')
    p7.setAttribute("class", "msg-error")
    p7.innerHTML = "Invalid city. Enter a valid city"
    validationResult.appendChild(p7)
  }
  if (validateZipCode(formZipCode.value)) {
    var p8 = document.createElement('p')
    p8.setAttribute("class", "msg-success")
    p8.innerHTML = `Zip code: ${formZipCode.value}`
    validationResult.appendChild(p8)
  } else {
    var p8 = document.createElement('p')
    p8.setAttribute("class", "msg-error")
    p8.innerHTML = "Invalid zip code. Must have between 4 and 5 numbers"
    validationResult.appendChild(p8)
  }
  if (validateEmail(formEmail.value)) {
    var p9 = document.createElement('p')
    p9.setAttribute("class", "msg-success")
    p9.innerHTML = `Email: ${formEmail.value}`
    validationResult.appendChild(p9)
  } else {
    var p9 = document.createElement('p')
    p9.setAttribute("class", "msg-error")
    p9.innerHTML = "Invalid email. Enter a valid city email"
    validationResult.appendChild(p9)
  }
  if (validatePassword(formPassword.value)) {
    var p10 = document.createElement('p')
    p10.setAttribute("class", "msg-success")
    p10.innerHTML = `Password: ${formPassword.value}`
    validationResult.appendChild(p10)
  } else {
    var p10 = document.createElement('p')
    p10.setAttribute("class", "msg-error")
    p10.innerHTML = "Invalid password. At least 8 characters, made up of letters and numbers"
    validationResult.appendChild(p10)
  }
  if (validatePassword(formPassword.value)) {
    if (validateRepeatPassword(formRepeatPassword.value, formPassword.value)) {
      var p11 = document.createElement('p')
      p11.setAttribute("class", "msg-success")
      p11.innerHTML = `Password match`
      validationResult.appendChild(p11)
    } else {
      var p11 = document.createElement('p')
      p11.setAttribute("class", "msg-error")
      p11.innerHTML = "Password don't match. Try again"
      validationResult.appendChild(p11)
    }
  } else {
    var p11 = document.createElement('p')
    p11.setAttribute("class", "msg-error")
    p11.innerHTML = "Password don't match. Try again"
    validationResult.appendChild(p11)
  }
}