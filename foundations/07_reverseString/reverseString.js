const reverseString = function(word) {
    let temp = '';
    for(let i = word.length-1; i >= 0; i--){
        temp+= word[i];
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;
