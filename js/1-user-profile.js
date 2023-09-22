// Realiza los siguientes ejercicios en JS y entrega por medio de un link tu repositorio que contiene los ejercicios resueltos.

// User profile
// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

const username = prompt("What's your username?");
const age = prompt("What's your age?");
const stringMovies = prompt("What are your favorite movies? write a list of movies, separate each movie with a comma");

const arrayMovies = stringMovies.split(",")

console.log(`Your name is ${username}`);
console.log(`Your age is ${age}`);
arrayMovies.forEach(movie => {
    console.log(`The film ${movie} is one of my favorites`);
});