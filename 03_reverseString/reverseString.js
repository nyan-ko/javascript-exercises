const reverseString = function(string) {
    let arr = string.split("");
    let reverseArr = new Array();
    for (let i = 0; i < arr.length; i++) {
        reverseArr[i] = arr[arr.length - i - 1];
    }
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
