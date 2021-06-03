function inputFieldsStyling() {
    const inputTextFields = document.querySelectorAll('input[type="text"]');
    inputTextFields.forEach(x => {
        x.addEventListener('focus', () => {
            x.style.cssText = `
            background-color:lightsteelblue;
            box-shadow: 0 0 0 30px lightsteelblue inset;
            `;
        })
        x.addEventListener('blur', () => {
            x.style.cssText = `
            background-color:white; 
            box-shadow: 0 0 0 30px white inset;
            `;
        })
    })
}
inputFieldsStyling();
function requiredSymbolColoring() {
    let submitButton = document.querySelector('.btn-save');
    submitButton.addEventListener('click', (event) => {
        const firstName = document.querySelector('.first-name');
        const lastName = document.querySelector('.last-name');
        const companyName = document.querySelector('.company-name-input');
        const nip = document.querySelector('.nip-input');
        const address = document.querySelector('.address');
        const city = document.querySelector('.city-wrapper__content');
        const zipCode = document.querySelector('.postal-code-wrapper__content');
        const country = document.querySelector('.country-input');
        const phoneNumber = document.querySelector('.phone-number-wrapper__content');
        const email = document.querySelector('.e-mail-wrapper__content')
        // First name 
        const requiredSymbolFirstName = document.querySelector('.required-f-name');
        if (firstName.value === '') {
            
            requiredSymbolFirstName.style.cssText = `
         color:red;
         `;
            firstName.style.cssText = `
                border:2px solid red;
            `;
        } else if (firstName.value !== '') {
            requiredSymbolFirstName.style.cssText = `
           color:gray;
        `;
        }
        // Last name 
        const requiredSymbolLastName = document.querySelector('.required-l-name')
        if (lastName.value === '') {
            requiredSymbolLastName.style.cssText = `
         color:red;
         `;
            lastName.style.cssText = `
              border:2px solid red;
         `;
        } else if (lastName.value !== '') {
            requiredSymbolLastName.style.cssText = `
           color:gray;
        `;
        }
        // Company name 
        const requiredSymbolCompanyName = document.querySelector('.required-company-name')
        if (companyName.value === '') {
            requiredSymbolCompanyName.style.cssText = `
         color:red;
         `;
            companyName.style.cssText = `
                border:2px solid red;
            `;
        } else if (companyName.value !== '') {
            requiredSymbolCompanyName.style.cssText = `
           color:gray;
        `;
        }
        // Nip value 
        const requiredSymbolNip = document.querySelector('.required-nip')
        if (nip.value === '') {
            requiredSymbolNip.style.cssText = `
         color:red;
         `;
            nip.style.cssText = `
                border:2px solid red;
            `;
        } else if (nip.value !== '') {
            requiredSymbolNip.style.cssText = `
           color:gray;
        `;
        }
        // Address name 
        const requiredSymbolAddress = document.querySelector('.required-address')
        if (address.value === '') {
            requiredSymbolAddress.style.cssText = `
         color:red;
         `;
            address.style.cssText = `
                border:2px solid red;
            `;
        } else if (address.value !== '') {
            requiredSymbolAddress.style.cssText = `
           color:gray;
        `;
        }
        // City name 
        const requiredSymbolCity = document.querySelector('.required-city')
        if (city.value === '') {
            requiredSymbolCity.style.cssText = `
         color:red;
         `;
            city.style.cssText = `
                border:2px solid red;
            `;
        } else if (city.value !== '') {
            requiredSymbolCity.style.cssText = `
           color:gray;
        `;
        }
        // Zip code 
        const requiredSymbolZip = document.querySelector('.required-zip-code')
        if (zipCode.value === '') {
            requiredSymbolZip.style.cssText = `
         color:red;
         `;
            zipCode.style.cssText = `
                border:2px solid red;
            `;
        } else if (zipCode.value !== '') {
            requiredSymbolZip.style.cssText = `
           color:gray;
        `;
        }
        // Country name - FOR FIXING
        //  const requiredSymbolCountry = document.querySelector('.required-country')
        //  if (country.value === '') {
        //      requiredSymbolCountry.style.cssText = `
        //   color:red;
        //   `;
        //  } else if (country.value !== '') {
        //      requiredSymbolCountry.style.cssText = `
        //     color:gray;
        //  `;
        //  }
        // Phone number 
        const requiredSymbolPhoneNumber = document.querySelector('.required-phone-number')
        if (phoneNumber.value === '') {
            requiredSymbolPhoneNumber.style.cssText = `
         color:red;
         `;
            phoneNumber.style.cssText = `
                border:2px solid red;
            `;
        } else if (phoneNumber.value !== '') {
            requiredSymbolPhoneNumber.style.cssText = `
           color:gray;
        `;
        }
        // E-mail value
        const requiredSymbolEmail = document.querySelector('.required-email')
        if (email.value === '') {
            requiredSymbolEmail.style.cssText = `
         color:red;
         `;
            email.style.cssText = `
                border:2px solid red;
            `;
        } else if (phoneNumber.value !== '') {
            requiredSymbolEmail.style.cssText = `
           color:gray;
        `;
        }
    });
}
requiredSymbolColoring();

function popUpMessage() {
    let submitButton = document.querySelector('.btn-save');
    const firstNamee = document.querySelector('.first-name');
    submitButton.addEventListener('click', (event) => {
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
    
}
popUpMessage();
function formData(event){
    let form = document.forms
}