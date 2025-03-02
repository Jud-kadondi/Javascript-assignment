let firstName = "Kadondi" 
let lastName = "Judith"
let country = "Ugandan"
let city = "Kampala"
let age = 26
let isMarried = false
let year = 2025

// checking data types

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);


console.log(typeof '10' === typeof 10);


console.log(parseInt ('9.8') === 10);

// no.4
console.log( 4 > 2 );

//no 5
4 > 3 && 10 < 12 // it is true because both statements are true
console.log(4 > 3 && 10 < 12);

4 > 3 && 10 > 12 //it is false because the second statement is not true 10 os not greater than 12
console.log(4 > 3 && 10 > 12)

4 > 3 || 10 < 12 // true because at least one condition is true
console.log(4 > 3 || 10 < 12);

4 > 3 || 10 > 12//true because the first condition is true
console.log(4 > 3 || 10 > 12)

!(4 > 3) //false
console.log(!(4 > 3));

!(4 < 3) // true
console.log(!(4 < 3));

!(false) // true
console.log(!(false));

!(4 > 3 && 10 < 12) // false because the inner statement is true
console.log(!(4 > 3 && 10 < 12));

!(4 > 3 && 10 > 12)// true because the inner statement is false
console.log(!(4 > 3 && 10 > 12));

!(4 === '4') // true because the condition is false
console.log(!(4 === '4'));

//no 6
let base = prompt("enter base");
let height = prompt("enter height");

let area = (0.5 * base * height);

alert(`The area of the triangle is: ${area}`);

// no7
let birthYear = prompt("Enter your birth year");
age =(2025 - birthYear);


if(age>=18){
    alert(`you are: ${age} years.  you are old enough to drive`)
}
else{
    let leftyears = (18-age)
    alert(`you are: ${age} years.  You will be allowed to drive after ${leftyears} years`)
};

//no8
let challenge = "30 Days Of JavaScript"

//no 9
console.log(challenge.toUpperCase());

//no 10
console.log(challenge.toLowerCase());

//no 11
let firstWord = challenge.slice(0, 2);
console.log(firstWord);

//no 12
let phrase = challenge.slice(3);
console.log(phrase);

//no 13
console.log(challenge.includes("Script"));

//no 14
console.log(challenge.indexOf('a'));

//no 15
console.log(challenge.lastIndexOf('a'));

// no 16
let position = 'You cannot end a sentence with because because because is a conjunction'
console.log(position.indexOf("because"));

//17
console.log(challenge.startsWith('30'));

//18
console.log(challenge.endsWith('JavaScript'));

//no 19


//no 20
let a = 20
let b = 7
if(a > b){
    console.log('a is greater than b')
}
else{
    console.log('a is lessthan b')
};

//using ternary operator

console.log(a > b ? 'a is greater than b' : 'a is less than b');

// no 21
let scores = prompt('enter your score')
if(scores >= 80){
    console.log('Grade: A')
}if (scores >=70 && scores <=79) {
    console.log('Grade: B')
}if (scores >=60 && scores <=69) {
    console.log('Grade: C')
} if (scores >=50 && scores <=59) {
    console.log('Grade: D')
} else {
    console.log('Grade: F')
}