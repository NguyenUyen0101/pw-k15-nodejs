
let weight = Number(prompt('Please input your weight(kg):'));
let height = Number(prompt('Please input your height(m):'));
let BMI = weight / (height * height);
if(BMI < 18.5){
    console.log('You are underweight, then see a doctor to rule out a serious health problem.');
}else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('You are normal weight, let maintain your weight!');
}else if(BMI >= 25 && BMI <= 29.9){
    console.log('You are overweight, let do exercise at least three times a week to stay in shape!');
}else{
    console.log('You are obesity, then see a doctor to rule out a serious health problem.');
}