const removeFromArray = function(arr, ...args) {
    return arr.filter((ar)=>!args.includes(ar));
};

// Do not edit below this line
module.exports = removeFromArray;
