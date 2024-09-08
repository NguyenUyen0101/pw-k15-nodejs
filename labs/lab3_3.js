//Sort an integer array from min to max

let array = [12, 34, 1, 16, 28]

let unsortedPosition = array.length - 1;
for (; unsortedPosition > 0; unsortedPosition--){
    for(let index = 0; index < unsortedPosition; index++ ){
        const leftValue = array[index];
        const rightValue = array[index + 1];
        if (leftValue > rightValue){
            let temp = leftValue;
            array[index] = rightValue;
            array[index + 1] = temp;
        }
    }
}
console.log(array);

