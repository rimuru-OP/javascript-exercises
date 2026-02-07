const add = (a, b)=> a+b;

const subtract = (a, b) => a-b;

const sum = (args) => args.reduce((prev, curr)=>prev+curr, 0);

const multiply = (args) => args.reduce((prev, curr)=>prev*curr, 1);

const power = (a, b) => a**b;

const factorial = (a)=>fact(a);

function fact(a){
  if(a<=1) return 1;
  return a*fact(a-1);
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
