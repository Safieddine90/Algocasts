// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strLen = str.length;
    const charMap = {};
    for (let char of str){
        if (charMap[char]){
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    }

    maxchar = str[0];
    for (let char in charMap){
        if (charMap[char] > charMap[maxchar]){
            maxchar = char;
        }
    }

    return maxchar;
}

module.exports = maxChar;
