const repeatString = function(word, times) {
    if(times<0){
        return `ERROR`;
    }
    let temp ='';
    for(let i = 0; i < times; i++){
        temp+=word;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
