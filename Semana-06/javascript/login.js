// Nodes

var formEmail = document.getElementById('formEmail')
var formPassword = document.getElementById('formPassword')
var validationResult = document.getElementById('validationResult')
var btnSubmit = document.getElementById('btnSubmit')
var logInForm = document.getElementById('logInForm')
var validEmail = document.getElementById('validEmail')
var validPassword = document.getElementById('validPassword')

// Validate
function charIsLetter(char) {
  if (typeof char !== 'string') {
    return false
  }
  return char.toLowerCase() !== char.toUpperCase()
}

function validatePassword(password) {
  var hasLetters = false
  var hasNumbers = false
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
}

function validateEmail(email) {
  var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expReg.test(formEmail.value)
}

// validate email and password

function validate() {
  validateEmail(formEmail.value)
  validatePassword(formPassword.value)
  return validateEmail(formEmail.value) && validatePassword(formPassword.value)
}

// Submit event

logInForm.addEventListener("submit", function(event) {
  event.preventDefault()
})

btnSubmit.addEventListener('click', function () {
  if(validate()) {
    validationResult.innerHTML = `<div class="validationSuccessContainer"><p>Successful login</p></div>`
  } else {
    validationResult.innerHTML = `<div class="validationErrorContainer"><p>Incorrect username or password.</p></div>`
  }
})

//Blur and focus event

formEmail.addEventListener('blur', function () {
  if(validateEmail(formEmail.value)) {
    formEmail.classList.remove('is-invalid');
    formEmail.classList.add('is-valid');
    validEmail.innerHTML = ""
  } else {
    formEmail.classList.remove('is-valid')
    formEmail.classList.add('is-invalid')
    validEmail.innerHTML = `<p>Incorrect email</p>`
  }
})

formEmail.addEventListener('focus', function () {
  formEmail.classList.remove('is-invalid');
  formEmail.classList.remove('is-valid');
  validEmail.innerHTML = ""
})

formPassword.addEventListener('blur', function() {
  if(validatePassword(formPassword.value)) {
    formPassword.classList.remove('is-invalid');
    formPassword.classList.add('is-valid');
    validPassword.innerHTML = ""
  } else {
    formPassword.classList.remove('is-valid');
    formPassword.classList.add('is-invalid');
    validPassword.innerHTML = `<p>Incorrect password</p>`
  }
})

formPassword.addEventListener('focus', function() {
  formPassword.classList.remove('is-invalid');
  formPassword.classList.remove('is-valid');
  validPassword.innerHTML = ""
})
