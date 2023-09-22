// Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
let flatAarray = [];

function checkAarray(list) {

    list.forEach(element => {
        Array.isArray(element) ? checkAarray(element) : flatAarray.push(element);
    });
}

checkAarray(multiDimension);
console.log(flatAarray);