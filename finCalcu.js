const inputAnode = document.querySelector('.js-input-a');
const inputBnode = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click',function() {

    const a = Number(inputAnode.value);
    const b = Number(inputBnode.value);
    const operation = selectOperationNode.value;
    
    const result = calculate({a,b,operation});
console.log(result);
    outputNode.innerHTML = result;
});