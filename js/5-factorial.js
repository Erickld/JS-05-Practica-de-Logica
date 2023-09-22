// Factorial
// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

let number = 0;

do {
    number = prompt("Enter an integer number >= 1 to calculate its Factorial");
} while (isNaN(number) || number < 1);

function factorial(num) {
    if (num == 1) {
        return 1;
    } else {
        return num*factorial(num-1);
    }
}

alert(`The factorial of number ${number} is ${factorial(number)}`);