const n = 7; 
let isNPrime = n > 1; 
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        isNPrime = false;
        break;
    }
}
console.log(`Is ${n} a prime number?: ${isNPrime}`);
let primes = [];
let sum = 0;
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(i);
        sum += i;
    }
}
console.log(`Prime numbers from 2 to ${n}: ${primes.join(', ')}`);
console.log(`Count of prime numbers: ${primes.length}`);
console.log(`Sum of prime numbers: ${sum}`);