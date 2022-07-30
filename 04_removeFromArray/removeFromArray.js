const removeFromArray = function() {
    let shift = 0;
    let arr = arguments[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (arr[i] === arguments[j]) {
                arr[i] = undefined;
                shift++;
                break;
            }
        }
        if (arr[i] && shift > 0) {
            arr[i - shift] = arr[i];
            arr[i] = undefined;
        }
    }
    return arr.slice(0, arr.length - shift);
};

// Do not edit below this line
module.exports = removeFromArray;
