// 
console.log("hello");

// Question #1:
function findKthDigitFromEnd(number, k) {
   let strNumber = number.toString();
    if (k <= 0 || k > strNumber.length) {
        return "Invalid k";
    }
    return parseInt(strNumber.charAt(strNumber.length - k));
}

let result1 = findKthDigitFromEnd(23617, 4);
console.log(result1);

// Question #2:
function sumOfDigits(number) {
    let num1 = number.toString();
    let digitArray = num1.split('').map(Number);
    let sum = digitArray.reduce((acc, val) => acc + val, 0);
    return sum;
}

let result2 = sumOfDigits(23618);
console.log(result2);

// Question #3 :
function sumOfEvenDigits(number) {
    let strNumber = number.toString();
    let digitArray = strNumber.split('').map(Number);
    let sum = digitArray.filter(digit => digit % 2 === 0).reduce((acc, val) => acc + val, 0);
    return sum;
}

let result3 = sumOfEvenDigits(23617);
console.log(result3);

// Question#4 :
for (let i = 0; i <= 10; i++) {
    console.log("Number:", i , "Square:" ,(i * i),"Cube:" , (i * i * i));
}

// Question #5:
function findLeftMostVowel(str) {
    let vowels = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i;
        }
    }
    // if not found then return -1
    return -1; 
}

function reverseNumberDigits(number) {
    let reversedStr = number.toString().split('').reverse().join('');
    return parseInt(reversedStr);
}

console.log(findLeftMostVowel("hello")); 
console.log(reverseNumberDigits(12345));

// Question #6 :
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Enter your guess (1 to 10):"));

if (userGuess === randomNumber) {
    console.log("You WIN");
} else {
    console.log("Not matched");
}

// Question #7:

function check10FirstLast(arr) {
    if (arr.length >= 2 && (arr[0] === 10 || arr[arr.length - 1] === 10)) {
        return true;
    }
    return false;
}

let array1 = [1, 2, 3, 4, 10];
let array2 = [10, 2, 3, 4, 5];

console.log(check10FirstLast(array1)); 
console.log(check10FirstLast(array2)); 

// Question #8 :
function sortAlphabetically(str) {
    return str.split('').sort().join('');
}

let inputString = 'comsats';
let sortedString = sortAlphabetically(inputString);
console.log(sortedString); 