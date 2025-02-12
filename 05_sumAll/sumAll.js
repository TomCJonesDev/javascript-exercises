const sumAll = function(arg1, arg2) {
    let begin = 0;
    let end = 0;
    if (typeof arg1 !== "number" || typeof arg2 !== "number" || arg1 % 1 !== 0 
    || arg2 % 1 !== 0 || arg1 < 0 || arg2 < 0) {
        return "ERROR";
    }
    if (arg1 <= arg2) {
        begin = arg1;
        end = arg2;
    } else if (arg2 <= arg1){
        begin = arg2;
        end = arg1;
    }
    let result = 0;
    for (let i = begin; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
