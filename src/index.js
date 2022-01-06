module.exports = function reverse (number) {

  let result = String(number).split('').reverse().join('');

  return parseInt(result)
}