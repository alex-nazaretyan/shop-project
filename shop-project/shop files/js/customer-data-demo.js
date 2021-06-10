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
        for(let i = 0; i<requiredSymbolsArr.length;i++){
            if(inputFieldsArr[i].value === ''){
                requiredSymbolsArr[i].style.cssText = `
                    color:red;               
                `;
            } else{
                requiredSymbolsArr[i].style.cssText=`
                    color:gray;
                `;
            }
        }
    })


}
requiredSymbolColoring();

function popUpMessage(){
    
}
popUpMMessage();