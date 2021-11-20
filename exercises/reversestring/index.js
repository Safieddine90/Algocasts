// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const strLen = str.length;
    const revStr = [strLen];
    for (let i = 0; i<strLen; i++) {
        revStr[strLen - i - 1] = str[i];
    }
    return revStr.join("").toString();
}

module.exports = reverse;
