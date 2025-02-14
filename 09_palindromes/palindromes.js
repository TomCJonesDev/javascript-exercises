const palindromes = function (string) {
    string = string
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
    let array = string.split("");
    let stringReversed = array
    .reverse()
    .join("");
    return string === stringReversed;
};

// Do not edit below this line
module.exports = palindromes;
