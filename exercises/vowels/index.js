// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelsCounter = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let string = str.toLowerCase();
    for (let char of vowels){
        if (string.includes(char)){
            vowelsCounter += 1;
        }
    }
    return vowelsCounter;
}

module.exports = vowels;
