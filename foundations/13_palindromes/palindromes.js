const palindromes = (a) => {
    a = a.toLowerCase().replace(/[^a-z0-9]/g, '');
    return a === a.split('').reverse().join('');
}
// Do not edit below this line
module.exports = palindromes;
