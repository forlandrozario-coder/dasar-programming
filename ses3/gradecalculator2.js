let scores = [80, 70, 90, 60, 85];
let sum = 0;
let passedCount = 0;
let failedCount = 0;
let highest = scores[0];
let lowest = scores[0];

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    sum += score;

   
    if (score >= 75) {
        passedCount++;
    } else {
        failedCount++;
    }

    
    if (score > highest) highest = score;
    if (score < lowest) lowest = score;
}

let average = sum / scores.length;

console.log(`Average Score: ${average}`);
console.log(`Passed Students (>= 75): ${passedCount}`);
console.log(`Failed Students (< 75): ${failedCount}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);