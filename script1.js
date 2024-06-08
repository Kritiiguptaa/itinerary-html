const emails = document.querySelector('#email');
const passwords = document.querySelector('#password');
const form = document.querySelector('#form');

const mail = (email) => {
    const condition3 = new RegExp(/\S+@\S+\.\S+/);
    return condition3.test(email);
};
const pass = (password) => {
    const condition = new RegExp("^(?=.{8,})");
    return condition.test(password);
};

const showError = (input, message) => {
        
    const formgroup = input.parentElement;
    
    formgroup.classList.remove('success');
    formgroup.classList.add('error');

    // show the error message
    const error = formgroup.querySelector('small');
    error.textContent = message;
};
const Success = (input) => {
    
    const formgroup = input.parentElement;

    
    formgroup.classList.remove('error');
    formgroup.classList.add('success');

    // hide the error message
    const error = formgroup.querySelector('small');
    error.textContent = '';
}
const checkmail = () => {

    let valid = false;

    const email = emails.value.trim();

     if (!mail(email)) {
        showError(emails, 'Invalid email-id');
    } else {
        Success(emails);
        valid = true;
    }

    return valid;
};    
const checkPassword = () => {

    let valid = false;

    const password = passwords.value.trim();

     if (!pass(password)) {
        showError(passwords, 'Password is not strong');
    } else {
        Success(passwords);
        valid = true;
    }

    return valid;
};
form.addEventListener('submit', function (e) {
        
    e.preventDefault();

    // validate forms
    
    let isEmailValid = checkmail();
    
    let isPasswordValid = checkPassword();
    

    let isFormValid = 
        
        isEmailValid &&
        isPasswordValid;
        

    // submit to the server if the form is valid
    if (isFormValid) {
      window.location.href="index3.html";
       
    }
   
});