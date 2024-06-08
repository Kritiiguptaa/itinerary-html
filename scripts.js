
const names = document.querySelector('#username');
const emails = document.querySelector('#email');
const phones=document.querySelector('#phoneno');
const passwords = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const form = document.querySelector('#form');


const user = (username) => {
    const condition1 = new RegExp("^(?=.{5,})");
    return condition1.test(username);
};
const phone = (phoneno) => {
    const condition2 = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return condition2.test(phoneno);
};
const mail = (email) => {
    const condition3 = new RegExp(/\S+@\S+\.\S+/);
    return condition3.test(email);
};
    const pass = (password) => {
        const condition = new RegExp("^(?=.{8,})");
        return condition.test(password);
    };

function confirmpass(confirmpassword) {
    const password = passwords.value.trim();
    if ((password!==confirmpassword )) {
      return false;
    }
    
    return true;
}

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
    const checkname = () => {

        let valid = false;
    
        const username = names.value.trim();
    
         if (!user(username)) {
            showError(names, 'Atleast 5 characters');
        } else {
            Success(names);
            valid = true;
        }
    
        return valid;
    };
    const checkphone = () => {

        let valid = false;
    
        const phoneno = phones.value.trim();
    
         if (!phone(phoneno)) {
            showError(phones, 'Invalid phone no.');
        } else {
            Success(phones);
            valid = true;
        }
    
        return valid;
    };
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
    const checkconfirmPassword = () => {

        let valid = false;
    
        const cpassword = confirmPassword.value.trim();
    
         if (!confirmpass(cpassword)) {
            showError(confirmPassword, 'Incorrect password');
        } else {
            Success(confirmPassword);
            valid = true;
        }
    
        return valid;
    };
    form.addEventListener('submit', function (e) {
        
        e.preventDefault();
    
        // validate forms
        let isUsernameValid = checkname();
        let isEmailValid = checkmail();
        let isphonevalid= checkphone();
        let isPasswordValid = checkPassword();
        let isConfirmPasswordValid = checkconfirmPassword();
    
        let isFormValid = 
            isUsernameValid &&
            isphonevalid&&
            isEmailValid &&
            isPasswordValid&&
            isConfirmPasswordValid;
    
        // submit to the server if the form is valid
        if (isFormValid) {
          window.location.href="index3.html";
           
        }
       
    });