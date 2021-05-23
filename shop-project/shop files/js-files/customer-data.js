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
function popUpMessage() {
    let submitButton = document.querySelector('.btn-save');
    submitButton.addEventListener('click', () => {
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
        } else if (phoneNumber.value !== '') {
            requiredSymbolEmail.style.cssText = `
           color:gray;
        `;
        }
    });
}
popUpMessage();