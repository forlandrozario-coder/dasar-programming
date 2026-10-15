let balance = 1000000;

while (true) {
    let input = prompt(`Current Balance: Rp${balance.toLocaleString()}\nEnter withdrawal amount (or 0 to exit):`);
    let amount = parseFloat(input);

    if (amount === 0 || isNaN(amount)) {
        console.log("Transaction ended. Thank you!");
        break;
    }

    if (amount < 0) {
        console.log("Invalid amount! Negative numbers are not allowed.");
    } else if (amount > balance) {
        console.log("Transaction rejected! Insufficient funds.");
    } else {
        balance -= amount;
        console.log(`Successful withdrawal: Rp${amount.toLocaleString()}`);
        console.log(`Remaining Balance: Rp${balance.toLocaleString()}`);
    }
}