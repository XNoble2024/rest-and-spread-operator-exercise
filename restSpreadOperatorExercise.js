f/*unction filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

const findMin = (...args) => Math.min(...args)

findMin(1, 4, 12, -3) // -3
findMin(1, -1) // -1
findMin(3, 1) // 1

//create the function, define the obj, create a function to return a spread of obj1 and obj2 together in one object
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]

doubleAndReturnArgs([1, 2, 3], 4, 4) // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4) // [2, 20, 8]

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {

    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {


    let newObj = { ...obj }
    delete newObj[key]
    return newObj;

}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {


    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

}

