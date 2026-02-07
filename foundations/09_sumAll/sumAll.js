const sumAll = function(a, b) {
    if(typeof(a) != 'number' || typeof(b) != 'number'){
        return 'ERROR';
    } else if(a<=0 || a%1!= 0 || b%1 != 0){
        return 'ERROR';
    }
    if(a<b){
        return (b*(b+1)/2) - (a * (a+1)/2) + a;        
    }
    return (a * (a+1)/2)-(b*(b+1)/2) + b;        
};

// Do not edit below this line
module.exports = sumAll;
