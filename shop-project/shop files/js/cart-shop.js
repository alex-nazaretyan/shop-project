function quantityAddingAndDividing() {
    const plusOption = document.querySelector('.first-line-plus');
    const firstLineAmount = document.querySelector('.first-line-amount');
    let value = Number(firstLineAmount.value);  
    console.log(value);
    plusOption.addEventListener('click', () => {
        let valueCount = document.querySelector('.quantity-number');
        let parsedNum = Number(valueCount.value);
        parsedNum++;
        document.querySelector('.quantity-number').value = parsedNum;      
    })
    const minusOption = document.querySelector('.first-line-minus');
    minusOption.addEventListener('click', () => {
        let valueCount = document.querySelector('.quantity-number');
        let parsedNum = Number(valueCount.value);
        parsedNum--;
        document.querySelector('.quantity-number').value = parsedNum;
        if (valueCount.value <= 0) {
            valueCount.value = 0;
        }
    })
}
quantityAddingAndDividing();
// function multiplyPrice(){
//     const firstLineAmount = document.querySelector('.first-line-amount');
//     let value = Number(firstLineAmount.value);
    
    
// }
// multiplyPrice();

function deliveryFormSubmitingJSON() {
    const deliveryMethodForm = document.forms.deliveryForm;
    function dataSubmiting(event) {
        event.preventDefault();
        const newData = new FormData(event.target);
        const jsonData = JSON.stringify(Object.fromEntries(newData));
        console.log(jsonData);
    }

    deliveryMethodForm.addEventListener('submit', dataSubmiting);
}
deliveryFormSubmitingJSON();
