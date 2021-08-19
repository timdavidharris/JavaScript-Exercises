const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    }
    let fib = [0, 1];
    for (let i = (+num); i > 0; i--) {
        let length = fib.length;
        fib[length] = fib[length - 2] + fib[length - 1];
    }
    return (fib[num]);
};

fibonacci(4);

module.exports = fibonacci;
