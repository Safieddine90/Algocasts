// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const capStr = [];
    for (let subset of str.split(" ")){
        capStr.push(subset[0].toUpperCase() + subset.slice(1));
    }

    return capStr.join( " ");
}

module.exports = capitalize;
