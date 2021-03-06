'use strict';
/**
  * To remove the null itams in array
  * @param {string} Key - target key.
  * @param {object} results - Input data.
  * @return {any[]} - the return array. 
  */
const rmNullItem = (Key, results) => {
  let arr = [];
  for (let index in results){
    if (results[index][Key] !== null) {
      arr.push(results[index]);
    }
  }
  return arr;
};

/**
  * To remove the repeating itams in array
  * @param {any[]} arr - Input array.
  * @return {any[]} - the return array. 
  */
const rmRepeatItemInArray = (arr) => {
  let result = arr.filter((element, index, arr) => {
    return arr.indexOf(element) === index;
  });
  return result;
};

/**
  * parse JSON data to object
  * @param {string[]} arr - target key array.
  * @param {object} data - Input data.
  * @return {object} - the return object. 
  */
const parseJSON = (arr, data) => {
  if (data.length > 0){
    for (let i in data){
      for (let j in arr){
        if ( data[i].hasOwnProperty(arr[j])) {
          data[i][arr[j]] = JSON.parse(data[i][arr[j]]);
          // level 2 JSON array
          for (let k in data[i][arr[j]]) {
            for (let m in arr) {
              if ( data[i][arr[j]][k] !== null) {
                if ( data[i][arr[j]][k].hasOwnProperty(arr[m])) {
                  data[i][arr[j]][k][arr[m]] =  JSON.parse(data[i][arr[j]][k][arr[m]]);
                }
              }
            }
          }
        }
      }
    }
  }
  return data;
};

/**
  * Turn null to empty array in one of the keyvalue in a object
  * @param {string} tarobj - target key.
  * @param {object} data - Input data.
  * @return {object} - the return object. 
  */
const nullToArray  = (tarobj,data) => {
  for (let index in data) {
    if (data[index][tarobj] == null ) {
      data[index][tarobj] = [];
    }
  }
  return data;
};

/**
  * Turn null  or undefined to empty array
  * @param {any} arr - input arr
  * @return {any[]} - the return arr. 
  */
const nullToEmptyArray = (arr) => {
  if (arr == null || arr == undefined ) {
    return [];
  }
  else {
    return arr;
  }
};

/**
  * Turn null or undefined to 0
  * @param {tar} tarobj - input data
  * @return {number} - the return number
  */
const nullToZero = (tar) => {
  if (tar == null || tar == undefined ) {
    return 0;
  }
  else {
    return tar;
  }
};

/**
  * Turn a string array to array obecjt
  * @param {string} str - input string array
  * @return {any[]} out - the return array. 
  */
const parseStrArray = (str) => {
  let out = [];
  if (str === null) {
    return [];
  }
  else {
    str = str.split(',');
    return str;
  }
};

/**
  * Diff Array
  * @param {object} input - input object.
  *   @param {object[]} input.curr - The target table name
  *   @param {object[]} input.next - next object array
  *   @param {string[]} input.keys - keys to diff
  * @return {object} output - the output object.
  *   @return {Array} output.toAdd - The list of item should be added.
  *   @return {Array} output.toPatch - The list of item should be patched.
  *   @return {Array} output.toDelete - The list of item should be deleted.
  */
 const diffArray = (input) => {

  let output = {
    toAdd: [],
    toPatch: [],
    toDelete:[]
  };

  for (let i in input.next) {
    let find = false;
    for (let j in input.curr) {   
      let check_key = true; 
      for (let m in input.keys) {
        if (typeof input.curr[j][input.keys[m]] === 'object') {
          if (input.curr[j][input.keys[m]].getTime() !== input.next[i][input.keys[m]].getTime()) {
            check_key = false;
          }
        }
        else {
          if (input.curr[j][input.keys[m]] !== input.next[i][input.keys[m]]) {
            check_key = false;
          }
        }
      }
      if (check_key) {
        find = true;
      }
    }
    if (find) {
      output.toPatch.push(input.next[i]);            
    }
    else {
      output.toAdd.push(input.next[i]); 
    }
  } 
 
  for (let i in input.curr) {
    let find = false;
    for (let j in input.next) {   
      let check_key = true; 
      for (let m in input.keys) {
        if (typeof input.next[j][input.keys[m]] === 'object') {
          if (input.curr[i][input.keys[m]].getTime() !== input.next[j][input.keys[m]].getTime()) {
            check_key = false;
          }
        }
        else {
          if (input.curr[i][input.keys[m]] !== input.next[j][input.keys[m]]) {
            check_key = false;
          }
        }
      }
      if (check_key) {
        find = true;
      }
    }
    if (!find) {
      output.toDelete.push(input.curr[i]);        
    }
  } 
  return output;
};

module.exports = {
  rmNullItem: rmNullItem,
  rmRepeatItemInArray: rmRepeatItemInArray,
  parseJSON: parseJSON,
  nullToArray: nullToArray,
  nullToEmptyArray: nullToEmptyArray,
  nullToZero: nullToZero,
  parseStrArray: parseStrArray,
  diffArray: diffArray
}
