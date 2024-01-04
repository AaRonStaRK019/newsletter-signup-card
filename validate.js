function validateEmail() {
    // Get the email input value
    const emailInput = document.getElementById('user-email');
    const email = emailInput.value;

    // check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    const successCard = document.querySelector('.success');
    // Display error message if email is invalid
    const emailError = document.getElementById('emailError');

    let encodedEmail = encodeURIComponent(email);

    if (!isValidEmail) {
      emailError.textContent = 'Valid email required';
      emailInput.classList.add('invalid-email');
    } else {
      emailError.textContent = ' ';
      emailInput.classList.add('valid-email');
      window.location.href = './success.html?email=' + encodedEmail;
    }
}

let signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateEmail();
})


