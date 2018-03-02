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


module.exports = {
  ifNull:ifNull,
}