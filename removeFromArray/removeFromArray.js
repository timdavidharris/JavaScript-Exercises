let array = [];
let takeOut1 = '';
let takeOut2 = '';

const removeFromArray = function(array, takeOut1, takeOut2) {
    if ((takeOut1 !== '') || (takeOut1 !== null)) {
        let remove1 = array.indexOf(takeOut1);
        array.splice(remove1, 1);
    }
        if ((takeOut2 !== '') || (takeOut2 !== null)) {
            let remove2 = array.indexOf(takeOut2);
            array.splice(remove2, 1);
        }
    return array;
};

module.exports = removeFromArray;
