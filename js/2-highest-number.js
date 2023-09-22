// Highest number
// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

alert('Write 10 numbers, this program will return the highest of those numbers.')
let currentNumber = 0;
let highest = 0;

for (let index = 1; index <= 10; index++) {

    do {
        currentNumber = prompt(`Set the Number ${index}:`);
    } while (isNaN(currentNumber));

    currentNumber = Number(currentNumber)

    if (index == 1 || currentNumber > highest) {
        highest = currentNumber;
        // console.log(highest);
    }
}

alert(`The highest of those numbers is ${highest}`);