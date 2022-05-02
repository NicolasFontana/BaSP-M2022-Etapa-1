// Nodes

var formEmail = document.getElementById('form-email')
var formPassword = document.getElementById('form-password')
var validationResult = document.getElementById('validation-result')
var btnSubmit = document.getElementById('btn-submit')
var logInForm = document.getElementById('log-in-form')
var validEmail = document.getElementById('valid-email')
var validPassword = document.getElementById('valid-password')
var loginURL = 'https://basp-m2022-api-rest-server.herokuapp.com/login'

// Validate

function charIsLetter(char) {
  if (typeof char !== 'string') {
    return false
  }
  return char.toLowerCase() !== char.toUpperCase() //allows only one letter in the string and not a number.
}

function validatePassword(password) {
  var hasLetters = false
  var hasNumbers = false
  for (var i = 0; i < password.length; i++) {
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

function validate() {
  return validateEmail(formEmail.value) && validatePassword(formPassword.value)
}

// Submit event

logInForm.addEventListener('submit', function (event) {
  event.preventDefault()
})

// Click event

btnSubmit.addEventListener('click', showResultsLogIn)

// Fetch

function fetchLogin(formEmail, formPassword, loginURL) {

  fetch(loginURL + '?email=' + formEmail.value + '&password=' + formPassword.value)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      console.log(jsonResponse)
      if (jsonResponse.success) {
        alert('Successful request.' + '\nMessage: ' + jsonResponse.msg)
      } else {
        alert('Error.' + '\nMessage: ' + jsonResponse.msg)
      }
    })
    .catch(function (error) {
      console.log('Error', error);
    });
}

// Results log in

function showResultsLogIn() {
  emailIsValid()
  passwordIsValid()

  if (validate()) {
    validationResult.innerHTML = `<div class="validationSuccessContainer"><p>Successful login</p></div>`
    fetchLogin(formEmail, formPassword, loginURL)
  } else {
    validationResult.innerHTML = `<div class="validationErrorContainer"><p>Incorrect email or password</p></div>`
  }
  if (validateEmail(formEmail.value)) {
    var p1 = document.createElement('p')
    p1.setAttribute("class", "msg-success")
    p1.innerHTML = `Email: ${formEmail.value}`
    validationResult.appendChild(p1)
  } else {
    var p1 = document.createElement('p')
    p1.setAttribute("class", "msg-error")
    p1.innerHTML = "Invalid email. Please check input requirements"
    validationResult.appendChild(p1)
  }
  if (validatePassword(formPassword.value)) {
    var p2 = document.createElement('p')
    p2.setAttribute("class", "msg-success")
    p2.innerHTML = `Password: ${formPassword.value}`
    validationResult.appendChild(p2)
  } else {
    var p2 = document.createElement('p')
    p2.setAttribute("class", "msg-error")
    p2.innerHTML = "Invalid password. Please check input requirements"
    validationResult.appendChild(p2)
  }
}

// Blur and focus event

// Email
function emailIsValid() {
  if (validateEmail(formEmail.value)) {
    formEmail.classList.remove('is-invalid')
    formEmail.classList.add('is-valid')
    validEmail.innerHTML = ""
  } else {
    formEmail.classList.remove('is-valid')
    formEmail.classList.add('is-invalid')
    validEmail.innerHTML = `<p>Incorrect email</p>`
  }
}
formEmail.addEventListener('blur', emailIsValid)


formEmail.addEventListener('focus', function () {
  formEmail.classList.remove('is-invalid')
  formEmail.classList.remove('is-valid')
  validEmail.innerHTML = ""
})

// Password

function passwordIsValid() {
  if (validatePassword(formPassword.value)) {
    formPassword.classList.remove('is-invalid')
    formPassword.classList.add('is-valid')
    validPassword.innerHTML = ""
  } else {
    formPassword.classList.remove('is-valid')
    formPassword.classList.add('is-invalid')
    validPassword.innerHTML = `<p>Incorrect password. Must have letters and numbers</p>`
  }
}

formPassword.addEventListener('blur', passwordIsValid)

formPassword.addEventListener('focus', function () {
  formPassword.classList.remove('is-invalid')
  formPassword.classList.remove('is-valid')
  validPassword.innerHTML = ""
})