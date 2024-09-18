// task 1
// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk

// const burger = 600;

// if(burger > 500){
//     console.log('coke is free')
// }
// else{
//     console.log('coke is 30tk')
// }



// task 2
// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

// const bmi = 15;

// if(bmi < 18.5){
//     console.log('you are underweight')
// }
// else if(bmi >= 18.5 && bmi <= 24.9){
//     console.log('you are normal')
// }
// else if(bmi >= 25 && bmi <= 29.9){
//     console.log('you are overweight')
// }
// else{
//     console.log('Otherwise, you are obese')
// }



// task 3
// Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

// const mark = 20;

// if(mark >= 90 && mark <= 100){
//     console.log('A');
// }
// else if(mark >= 80 && mark <= 89){
//     console.log('B');
// }
// else if(mark >= 70 && mark <= 79){
//     console.log('C');
// }
// else if(mark >= 60 && mark <= 69){
//     console.log('D');
// }
// else{
//     console.log('F');
// }



// task 4
// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note: 
// use nested if-else-if-else


// const result = 85;
// const friend = 15;

// if(result > 80){
//     if(friend > 80){
//         console.log('go for a lunch');
//     }
//     else if(friend >= 60 && friend <= 79){
//         console.log('good tuck, next time');
//     }
//     else if(friend >= 40 && friend <= 59){
//         console.log('friends message unseen');
//     }
//     else{
//         console.log('block');
//     }
// }
// else{
//     console.log('go to home and sleep and act sad');
// }



// task 5
// you have two numbers in two variables, called: num1, num2

// now declare a variable called result. 
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else. 

// also, write it using ternary operator.


// const num1 = 55;
// const num2 = 44;
// let result = 0;

// if(num1 > num2){
//     result = num1 * 2;
//     console.log(result)
// }
// else{
//     console.log(num1 + num2);
// }



// task 6
// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

// const price = 800;
// const age = 40;
// const isStudent = false;

// if(age < 10){
//     console.log('free')
// }
// else if(age >= 60){
//     const discount = price * 15 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }
// else if(isStudent === true){
//     const discount = price * 50 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }
// else{
//     console.log('ticket fare 800 tk')
// }