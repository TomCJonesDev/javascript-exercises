const reverseString = function(string) {
    let array = string.split("");
    let finalArray = [];
    let finalString = "";
    for (let char of array) {
        finalArray.unshift(char);
    }
    finalString = finalArray.join("");
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
