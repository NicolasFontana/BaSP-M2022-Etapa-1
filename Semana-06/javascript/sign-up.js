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
var signUpForm = document.getElementById('signUpForm')
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

btnSignUp.addEventListener('click', function () {
  if (validate()) {
    validationResult.innerHTML = `<div class="validationSuccessContainer"><p>Successful sign up</p></div>`
  } else {
    validationResult.innerHTML = `<div class="validationErrorContainer"><p>Please correct the errors</p></div>`
  }
})

// Blur and focus event

// Name

formName.addEventListener('blur', function() {
  if(validateName(formName.value)) {
    formName.classList.remove('is-invalid')
    formName.classList.add('is-valid')
    validName.innerHTML = ""
  } else {
    formName.classList.remove('is-valid')
    formName.classList.add('is-invalid')
    validName.innerHTML = "<p>Only letters and must have more than 3 letters</p>"
  }
})

formName.addEventListener('focus', function() {
  formName.classList.remove('is-invalid')
  formName.classList.remove('is-valid')
  validName.innerHTML = ""
})

// Last name

formLastName.addEventListener('blur', function() {
  if(validateLastName(formLastName.value)) {
    formLastName.classList.remove('is-invalid')
    formLastName.classList.add('is-valid')
    validLastName.innerHTML = ""
  } else {
    formLastName.classList.remove('is-valid')
    formLastName.classList.add('is-invalid')
    validLastName.innerHTML = "<p>Only letters and must have more than 3 letters</p>"
  }
})

formLastName.addEventListener('focus', function() {
  formLastName.classList.remove('is-invalid')
  formLastName.classList.remove('is-valid')
  validLastName.innerHTML = ""
})

// DNI

formDNI.addEventListener('blur', function() {
  if(validateDNI(formDNI.value)) {
    formDNI.classList.remove('is-invalid')
    formDNI.classList.add('is-valid')
    validDNI.innerHTML = ""
  } else {
    formDNI.classList.remove('is-valid')
    formDNI.classList.add('is-invalid')
    validDNI.innerHTML = "<p>Only numbers and must have more than 7</p>"
  }
})

formDNI.addEventListener('focus', function() {
  formDNI.classList.remove('is-invalid')
  formDNI.classList.remove('is-valid')
  validDNI.innerHTML = ""
})

// Date

formDate.addEventListener('blur', function() {
  if(validateDate(formDate.value)) {
    formDate.classList.remove('is-invalid')
    formDate.classList.add('is-valid')
    validDate.innerHTML = ""
  } else {
    formDate.classList.remove('is-valid')
    formDate.classList.add('is-invalid')
    validDate.innerHTML = "<p>Must be over 18 years old</p>"
  }
})

formDate.addEventListener('focus', function() {
  formDate.classList.remove('is-invalid')
  formDate.classList.remove('is-valid')
  validDate.innerHTML = ""
})

// Phone

formPhone.addEventListener('blur', function() {
  if(validatePhone(formPhone.value)) {
    formPhone.classList.remove('is-invalid')
    formPhone.classList.add('is-valid')
    validPhone.innerHTML = ""
  } else {
    formPhone.classList.remove('is-valid')
    formPhone.classList.add('is-invalid')
    validPhone.innerHTML = "<p>Please enter a valid phone number</p>"
  }
})

formPhone.addEventListener('focus', function() {
  formPhone.classList.remove('is-invalid')
  formPhone.classList.remove('is-valid')
  validPhone.innerHTML = ""
})

// Address

formAddress.addEventListener('blur', function() {
  if(validateAddress(formAddress.value)) {
    formAddress.classList.remove('is-invalid')
    formAddress.classList.add('is-valid')
    validAddress.innerHTML = ""
  } else {
    formAddress.classList.remove('is-valid')
    formAddress.classList.add('is-invalid')
    validAddress.innerHTML = "<p>Enter a valid address</p>"
  }
})

formAddress.addEventListener('focus', function() {
  formAddress.classList.remove('is-invalid')
  formAddress.classList.remove('is-valid')
  validAddress.innerHTML = ""
})

// City

formCity.addEventListener('blur', function() {
  if(validateCity(formCity.value)) {
    formCity.classList.remove('is-invalid')
    formCity.classList.add('is-valid')
    validCity.innerHTML = ""
  } else {
    formCity.classList.remove('is-valid')
    formCity.classList.add('is-invalid')
    validCity.innerHTML = "<p>Must have more than 3 letters</p>"
  }
})

formCity.addEventListener('focus', function() {
  formCity.classList.remove('is-invalid')
  formCity.classList.remove('is-valid')
  validCity.innerHTML = ""
})

// Zip code

formZipCode.addEventListener('blur', function() {
  if(validateZipCode(formZipCode.value)) {
    formZipCode.classList.remove('is-invalid')
    formZipCode.classList.add('is-valid')
    validZipCode.innerHTML = ""
  } else {
    formZipCode.classList.remove('is-valid')
    formZipCode.classList.add('is-invalid')
    validZipCode.innerHTML = "<p>Must have between 4 and 5 numbers</p>"
  }
})

formZipCode.addEventListener('focus', function() {
  formZipCode.classList.remove('is-invalid')
  formZipCode.classList.remove('is-valid')
  validZipCode.innerHTML = ""
})

// Email

formEmail.addEventListener('blur', function() {
  if(validateEmail(formEmail.value)) {
    formEmail.classList.remove('is-invalid')
    formEmail.classList.add('is-valid')
    validEmail.innerHTML = ""
  } else {
    formEmail.classList.remove('is-valid')
    formEmail.classList.add('is-invalid')
    validEmail.innerHTML = "<p>Enter a valid email</p>"
  }
})

formEmail.addEventListener('focus', function() {
  formEmail.classList.remove('is-invalid')
  formEmail.classList.remove('is-valid')
  validEmail.innerHTML = ""
})

// Password

formPassword.addEventListener('blur', function() {
  if(validatePassword(formPassword.value)) {
    formPassword.classList.remove('is-invalid')
    formPassword.classList.add('is-valid')
    validPassword.innerHTML = ""
  } else {
    formPassword.classList.remove('is-valid')
    formPassword.classList.add('is-invalid')
    validPassword.innerHTML = "<p>At least 8 characters, made up of letters and numbers</p>"
  }
})

formPassword.addEventListener('focus', function() {
  formPassword.classList.remove('is-invalid')
  formPassword.classList.remove('is-valid')
  validPassword.innerHTML = ""
})

// Repeat password

formRepeatPassword.addEventListener('blur', function() {
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
})

formRepeatPassword.addEventListener('focus', function() {
  formRepeatPassword.classList.remove('is-invalid')
  formRepeatPassword.classList.remove('is-valid')
  validRepeatPassword.innerHTML = ""
})