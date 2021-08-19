const palindromes = function (word) {
    let array = [];
    array = word;
    array = array.replace(/[^\w\s]|_/g, "")
                 .replace(/\s+/g, "")
                 .toLowerCase()
    let reverseArray = array.split('').reverse().join('');
    return reverseArray === array;
};

module.exports = palindromes;
