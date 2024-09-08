//Merge 2 SORTED integer array into one SORTED array

let array01 = [1, 12, 16, 28, 34];
let array02 = [1, 13, 16, 27, 99];
let array03 = array01.concat(array02);
let array04 = array03.sort((a, b) => a-b);
console.log(array04);

