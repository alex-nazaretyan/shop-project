function quantityAddingAndDividing() {
    const plusOption = document.querySelector('.first-line-plus')
    plusOption.addEventListener('click', () => {
        let valueCount = document.querySelector('.quantity-number');
        let parsedNum = Number(valueCount.value);
        parsedNum++;
        document.querySelector('.quantity-number').value = parsedNum

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

function deletingSections() {
    const deletingButton = document.querySelector('.delete-button')
    deletingButton.addEventListener('click', () => {
        const firstLine = document.querySelector('.demo');
        firstLine.remove();
    })
}
deletingSections();


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


const img = document.querySelector('.picture-1');

img.addEventListener('click', ()=>{
    img.style.cssText=`
        width:600px;
        height:600px;
    `;
})
img.addEventListener('blur',(event)=>{
    event.target.img.style.cssText=`
    width:205px;
    height:255px;
    `
})
