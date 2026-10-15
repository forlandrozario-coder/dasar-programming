const num = 12321;
let temp = num;
let count = 0;
let sum = 0;
let reversed = 0;
while (temp > 0) {
    let digit = temp % 10;        
    count++;                     
    sum += digit;                 
    reversed = (reversed * 10) + digit; 
    temp = Math.floor(temp / 10);   
}
let isPalindrome = (num === reversed);
console.log(`Analysis for number: ${num}`);
console.log(`- Count of digits: ${count}`);
console.log(`- Sum of digits: ${sum}`);
console.log(`- Reversed number: ${reversed}`);
console.log(`- Is it a palindrome?: ${isPalindrome}`);