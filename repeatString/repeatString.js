let string = '';
let runTimes = 0;

const repeatString = function(string, runTimes) {
    if (runTimes < 0){
        return 'ERROR';
    } else if (runTimes === 0) {
        return '';
    } else {
    for (let i = 1; i < runTimes; i++){
        string += 'hey';
    }
}
return string;
};

module.exports = repeatString;
