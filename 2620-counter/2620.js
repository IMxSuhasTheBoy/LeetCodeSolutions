/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function (n) {
  return function () {
    return n++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

////ineffcient approach----------------------------------

let createCounterr = function (n) {
  let flag = true;
  let count = n;
  return function () {
    if (flag) {
      flag = false;
      return count;
    } else {
      return ++count;
    }
  };
};

const myCounter = createCounterr(10);

console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
