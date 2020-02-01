const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function(e){
  e.preventDefault();
  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, confirmPassword);
});

// validate password match
function checkPasswordsMatch(passwordElement, confirmElement){
  if (passwordElement.value !== confirmElement.value) {
    showError(confirmElement, "Passwords don't match");
  }
}

// check element length
function checkLength(element, min, max){
  if (element.value.length < min) {
    showError(element, `${getFieldName(element)} must be at least ${min} characters`);
  } else if (element.value.length > min) {
    showError(element, `${getFieldName(element)} must be less than ${max} characters`);
  } else {
    showSuccess(element);
  }
}
//check required fields
function checkRequired(elements){
  elements.forEach((element) => {
    if (element.value === '') {
      showError(element, `${getFieldName(element)} is required`);
    } else {
      showSuccess(element);
    }
  });
}

// get fieldName
function getFieldName(element){
  return element.id.charAt(0).toUpperCase() + element.id.slice(1);
}

// check email
function checkEmail(element){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(element.value.trim())) {
    showSuccess(element);
  } else {
    showError(element, 'Email is not valid');
  }
}

// Show error message
function showError(element, message){
  const formControl = element.parentElement;
  formControl.className = 'form-control error';
  const smallTag = formControl.querySelector('small');
  smallTag.innerText = message;
}

// Show success outline
function showSuccess(element){
  const formControl = element.parentElement;
  formControl.className = 'form-control success';
}
