let theString = '';

const reverseString = function(theString) {
    let theNewString = theString.split('');
    let reverseString = theNewString.reverse();
    let output = reverseString.join('');
    return output;
};

module.exports = reverseString;
