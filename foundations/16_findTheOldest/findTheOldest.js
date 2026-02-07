function getAge(temp){
    if(temp.yearOfDeath === undefined){
        return new Date().getFullYear()-temp.yearOfBirth;
    }
    return temp.yearOfDeath-temp.yearOfBirth;
}
const findTheOldest = (people) => people.reduce((prev, curr) => (getAge(prev)>getAge(curr))?prev:curr);

// Do not edit below this line
module.exports = findTheOldest;
