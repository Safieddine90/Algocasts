// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverse = require("../reversestring");
function reverseInt(n) {
    negator = 1;
    if (n<0){
        negator = -1
    }
    const strInt = n.toString();
    const reverseStrInt = reverse(strInt);
    return (parseInt(reverseStrInt)*negator);

}

module.exports = reverseInt;
