// Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

let sentence = prompt("Check if this word or sentence (it can be capitalized, have spaces and punctuation) is a Palindrome:");
sentence = sentence.toLowerCase().replaceAll(" ","").replaceAll(",","").replaceAll(".","");

let arraChart = sentence.split("");
arraChart = arraChart.reverse();

let sentenceReverse = arraChart.join("");
// console.log(sentence, sentenceReverse)
if (sentence === sentenceReverse) {
    alert('Yes, the word is a Palindrome.')
} else {
    alert('No, the word is not a Palindrome.')
}