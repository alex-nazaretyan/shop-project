function inputFieldsStyling() {
    const accountEditingForm = document.forms.accountEditingForm;
    let inputFieldsArr = [];
    for (let i = 0; i < accountEditingForm.elements.length; i++) {
        inputFieldsArr.push(accountEditingForm.elements[i])
    }
    inputFieldsArr.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.cssText = `
            background-color:lightsteelblue;
            box-shadow: 0 0 0 30px lightsteelblue inset;
            `;
        })
        el.addEventListener('blur', () => {
            el.style.cssText = `
            background-color:white; 
            box-shadow: 0 0 0 30px white inset;
            `;
        })
    })
}
inputFieldsStyling();

function requiredSymbolColoring() {
    const submitButton = document.querySelector('.btn-save');
    const requiredSymbols = document.querySelectorAll('.required');
    const form = document.forms.accountEditingForm;
    let inputFieldsArr = [];
    let requiredSymbolsArr = [];

    for (let i = 0; i < form.elements.length; i++) {
        inputFieldsArr.push(form.elements[i])
    }
    for (let i = 0; i < requiredSymbols.length; i++) {
        requiredSymbolsArr.push(requiredSymbols[i])
    }
    submitButton.addEventListener('click', () => {
        inputFieldsArr.forEach(el => {
            el.value.trim();
            if (el.value === '') {
                el.style.cssText = `
                    border:2px solid red;
                `;
            } else if (el.value !== '') {
                el.style.cssText = `
                    border:1px solid gray;
                `;
            }
        })
        for (let i = 0; i < requiredSymbolsArr.length; i++) {
            if (inputFieldsArr[i].value === '') {
                requiredSymbolsArr[i].style.cssText = `
                    color:red;               
                `;
            } else {
                requiredSymbolsArr[i].style.cssText = `
                    color:gray;
                `;
            }
        }
    })


}
requiredSymbolColoring();

function popUpMessage() {
    const submitButton = document.querySelector('.btn-save');
    const form = document.forms.accountEditingForm;
    const inputFieldsArr = [];
    const popUpMessages = document.querySelectorAll(".pop-up");
    const popUpMessagesArr = [];
    for (let i = 0; i < popUpMessages.length; i++) {
        popUpMessagesArr.push(popUpMessages[i]);
    }
    for (let i = 0; i < form.elements.length; i++) {
        inputFieldsArr.push(form.elements[i])
    }
    submitButton.addEventListener('click', () => {
        inputFieldsArr.forEach((el) => {
            const firstName = document.querySelector('.first-name');
            const lastName = document.querySelector('.last-name');
            const companyName = document.querySelector('.company-name-input');
            const nip = document.querySelector('.nip-input');
            const address = document.querySelector('.address');
            const city = document.querySelector('.city-wrapper__content');
            const zipCode = document.querySelector('.postal-code-wrapper__content');
            const country = document.querySelector('.country-input');
            const phoneNumber = document.querySelector('.phone-number-wrapper__content');
            const email = document.querySelector('.e-mail-wrapper__content');
            // POP UP VARRIABLES
            const firstNamePopUpMessage = document.querySelector('.first-name-pop-up-message');
            const lastNamePopUpMessage = document.querySelector('.last-name-pop-up-message');
            const companyNamePopUpMessage = document.querySelector('.company-name-pop-up-message')
            const nipPopUpMessage = document.querySelector('.nip-name-pop-up-message');
            const addressPopUpMessage = document.querySelector('.address-name-pop-up-message');
            const cityPopUpMessage = document.querySelector('.city-name-pop-up-message');
            const zipCodePopUpMessage = document.querySelector('.zip-code-pop-up-message');
            const countryPopUpMessage = document.querySelector('.country-name-pop-up-message');
            const phoneNumberPopUpMessage = document.querySelector('.phone-number-pop-up-message');
            const emailPopUpMessage = document.querySelector('.email-name-pop-up-message');

            if (firstName.value === '') {
                return firstNamePopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                top:315px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;
            `;
            } else {
                firstNamePopUpMessage.style.cssText = `
                display:none;
            `;
            }
            if (lastName.value === '') {
                return lastNamePopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                top:315px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;
            `;
            } else {
                lastNamePopUpMessage.style.cssText = `
                display:none;            
            `;
            }
            if (companyName.value === '') {
                return companyNamePopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                left:180px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;            
            `;
            } else {
                companyNamePopUpMessage.style.cssText = `
                display:none;
            `;
            }
            if (nip.value === '') {
                return nipPopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                right:180px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;            
            `;
            } else {
                nipPopUpMessage.style.cssText = `
                display:none;
            `;
            }
            if (address.value === '') {
                return addressPopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                left:180px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;            
            `;
            } else {
                addressPopUpMessage.style.cssText = `
                display:none;
            `;
            }
            if (city.value === '') {
                return cityPopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                left:180px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;            
            `;
            } else {
                cityPopUpMessage.style.cssText = `
                display:none;
            `;
            }
            if (zipCode.value === '') {
                return zipCodePopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                right:180px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;            
            `;
            } else {
                zipCodePopUpMessage.style.cssText = `
                display:none;
            `;
            }
            if (phoneNumber.value === '') {
                return phoneNumberPopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                left:180px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;            
            `;
            } else {
                phoneNumberPopUpMessage.style.cssText = `
                display:none;
            `;
            }
            if (email.value === '') {
                return emailPopUpMessage.style.cssText = `
                display:block;
                position:absolute;
                right:180px;
                border:1px solid black;
                border-radius:11px;
                width:250px;
                padding:4px 0px 4px 6px;            
            `;
            } else {
                emailPopUpMessage.style.cssText = `
                display:none;
            `;
            }
        });
    });
}
popUpMessage();
