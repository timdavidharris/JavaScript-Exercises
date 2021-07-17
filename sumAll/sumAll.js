const sumAll = function(num1, num2) {
    let addItUp = null;
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return 'ERROR'
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
        if (num1 < num2) {
            while (num1 <= num2) {
                addItUp += num1;
                num1++;
            }
            return addItUp;
        } else if (num2 < num1) {
            while (num2 <= num1) {
                addItUp += num2;
                num2++;
            }
            return addItUp;
        } 
    else {
        return 'ERROR';
    }
};

module.exports = sumAll;
