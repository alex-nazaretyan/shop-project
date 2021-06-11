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
        let element =  logInForm.elements.email.value = logInForm.elements.email.value;
        element = 'some text'
        
       
        
    })
    



}
emailValidation();