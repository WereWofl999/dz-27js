
let r = 7;


switch(r){
    case 3:
        console.log('Мфловато');
        break;
    case 4:
        console.log('В точку ');
        break;
    case 5:
        console.log('Перебор ');
        break;
    default:
        console.log("Нет таких значений");
}


console.log("......")

let num = 5;

if(num === 6){

    console.log('namber id 6');

}else if (num === 7){

    console.log('namber id 7');

}else if (num === 8){
    console.log('namber id 8');

}else  {
    console.log('Нет таких значений');

}
// Ternary

const tern = num === 6 ? console.log("namber id 6") : console.log("namber is not 6");

console.log('tern' , tern);
