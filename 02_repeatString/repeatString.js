const repeatString = function(string, multiplier) {
    if (multiplier >= 0) {
        let finalString = "";
        for (i = 0; i < multiplier; i++) {
            finalString += string;
        }
        return finalString; 
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
