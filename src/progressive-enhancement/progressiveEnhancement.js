function submitForm(event){
    event.preventDefault();
    console.log('submitted');

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');

    console.log(this.name.value);
    let error = "";

    if (nameInput.value === "") {
        error += "Name is required.\n";
    }

    if (emailInput.value === ""){
      error += "Email is required.\n";
    } else if (!validateEmail(emailInput.value)) {
      error += "Please enter a valid email address.\n";
    }

    if (error){
        event.preventDefault();
        document.querySelector('#form-error').textContent = error;
    }

}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.querySelector('#contact-form').addEventListener('submit', submitForm);


