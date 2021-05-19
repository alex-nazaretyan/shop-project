function inputFieldsStyling() {
    const inputTextFields = document.querySelectorAll('input[type="text"]');
    inputTextFields.forEach(x => {
        x.addEventListener('focus', () => {
            x.style.cssText = `
            background-color:cornflowerblue;
            box-shadow: 0 0 0 30px cornflowerblue inset;
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