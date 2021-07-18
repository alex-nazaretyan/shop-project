function emailValidation() {
    const validUserName = 'deJav1u@abv.bg';
    const logInForm = document.forms.logIn;
    const submitButton = document.querySelector('.btn')
    submitButton.addEventListener('click', () => {
        if (logInForm.elements.email.value === validUserName) {
            const greenCheck = document.querySelector('.green-check');
            const redCheck = document.querySelector('.red-check');
            greenCheck.style.cssText = `
                display:inline-block;
                color:green;
                padding-left:10px;
            `;
            redCheck.style.cssText = `
                display:none;
            `;

        } else {
            const greenCheck = document.querySelector('.green-check');
            const redCheck = document.querySelector('.red-check');
            const emailText = document.querySelector('.email-text-correct');
            emailText.style.cssText = `
                color:green; 
            `;
            redCheck.style.cssText = `
                display:inline-block;
                color:red;
                padding-left:10px;
            `;
            greenCheck.style.cssText = `
                display:none;
            `;
        }
    });
}
emailValidation();


function passwordValidation(pass) {
    const passwordMessage = document.querySelector('.password-wrapper');
    const emptyFieldMessage = document.querySelector('.empty-field');
    const passwordLengthMessage = document.querySelector('.password-length');
    const submitButton = document.querySelector('.btn');
    const password = document.querySelector('.log-in__password');
    submitButton.addEventListener('click', () => {
        if (password.value === '') {
            passwordMessage.style.cssText = `
                justify-content:unset;
            `;
            emptyFieldMessage.style.cssText = `
            display:inline-block;
            padding-left:10px;
            `;
            passwordLengthMessage.style.cssText = `
                display:none;
            `;
        } else if (password.value !== '' && password.value.length <=5) {
            passwordLengthMessage.style.cssText = `
                display:inline-block;
                padding-left:10px;
            `;
            emptyFieldMessage.style.cssText = `
                display:none;
            `; 
            
        } else if(password.value.length >6){
            passwordLengthMessage.style.cssText = `
                display:none;
            `;
            emptyFieldMessage.style.cssText = `
                display:none;
            `;
        }
    });

}
passwordValidation();
