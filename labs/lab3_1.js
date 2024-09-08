//Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];
let evenNumber = 0;
let oddNumber = 0;

for (let index = 0; index < intArr.length; index++) {
    if ( intArr[index] % 2 === 0 ){
        evenNumber++;
    } else {
        oddNumber++;
    }
}

console.log('Even Number: ${evenNumber}');
console.log('Odd Number: ${oddNumber}');