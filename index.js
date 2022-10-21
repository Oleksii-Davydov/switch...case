// переделать на switch case
let numOrStr2 = prompt('input number or string');
console.log(numOrStr2)
switch (true) {
    case numOrStr2 === null:
        console.log('ви скасували');
        break;
    case numOrStr2.trim() === '':  ///trim() як примінити?
        console.log('Empty String');
        break;
    case isNaN(+numOrStr2)://не працює, якщо пишу літеру пише ок
        console.log(' number is Ba_NaN')
        break;
    default :
        console.log('OK!')
}