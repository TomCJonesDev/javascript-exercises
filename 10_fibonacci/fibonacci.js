const fibonacci = function(n) {
    let array = [1, 1];
    for (let i = 2; i < n; i++) {
        array[i] = array[i-2] + array[i-1]
    }
    if (n > 0) {
        return array[n -1];
    } else if (n < 0) {
        return "OOPS";
    } else {
        return 0;
    }
};

// Do not edit below this line
module.exports = fibonacci;