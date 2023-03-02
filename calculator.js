alert(`
Підрахуй суму всіх чисел в заданому користувачем діапазоні.`)

const operations ={
    sum: '+',
    substract: '-',
    multiply: '*',
    divison: '/'
}
function calculate({a, b, operation}) {
    let result = null;

        switch (operation){ 
            case operations.sum:
                    result = sum(a, b,);
                break;
            case operations.substract:
                    result = subtract(a, b,);
                break;
                
            case operations.multiply:
                    result = multiply(a, b,);
                break;
                
            case operations.divison:
                    result = divide(a, b,);
                break;    

            default:
                break;
        }      
        return result;  
}
