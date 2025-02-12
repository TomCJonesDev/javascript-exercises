const removeFromArray = function(array, ...removeValues) {
    for (const removeValue of removeValues) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === removeValue) {
                array.splice(i, 1);
                i--
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
