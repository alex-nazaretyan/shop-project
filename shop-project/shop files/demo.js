const inputOne = document.querySelector('#input-one');
const inputTwo = document.querySelector('#input-two');

inputOne.addEventListener('focus', ()=>{
    inputOne.style.cssText=`
        background-color: rgb(108, 108, 218);
    `;
    inputOne.value='I am focused'
});
inputOne.addEventListener('blur',()=>{
    inputOne.style.cssText=`
        background-color:white;
    `;
    inputOne.value='';
})

inputTwo.addEventListener('focus', ()=>{
    inputTwo.style.cssText=`
        background-color:rgb(108,108,218);
    `;
    inputTwo.value='I am focused'
})
inputTwo.addEventListener('blur',()=>{
    inputTwo.style.cssText=`
        background-color:white;
    `;
    inputTwo.value='';
})
cadetblue
cornflowerblue
lightsteelblue