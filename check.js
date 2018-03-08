'use strict';

/**
  * check if input is null, undefined or " "
  * @param {any} item - Input item.
  * @return {any} - the return. 
  */
const ifNull = (item) => {
  if (item === null || item === undefined || item === '') {
    return true;
  }
  else {
    return false;
  }
};

/**
  * check the length of the array (if null or undefined, return 0)
  * @param {any[]} arr - Input array.
  * @return {number} - the length of the array. 
  */
const arrayLength = (arr) => {
  if (arr == null || arr == undefined ) {
    return 0;
  }
  else {
    return (arr.length);
  }
};


module.exports = {
  ifNull:ifNull,
  arrayLength:arrayLength
}