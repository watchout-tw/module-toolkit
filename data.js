'use strict';

/**
  * To remove the repeating itams in array
  * @param {any[]} arr - Input array.
  * @return {any[]} - the return array. 
  */
const rmRepeatItemInArray = (arr) => {
  let result = arr.filter((element, index, arr) => {
    return arr.indexOf(element)=== index;
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
  while (str !== null ) {

    str = str.split(',');
    out.push(str[0]);
    if (str.length > 1){
      str = str[1];
    }
    else {
      str = null;
    }
  }
  return out;
};

module.exports = {
  rmRepeatItemInArray:rmRepeatItemInArray,
  parseJSON:parseJSON,
  nullToArray:nullToArray,
  nullToEmptyArray:nullToEmptyArray,
  nullToZero:nullToZero,
  parseStrArray:parseStrArray
}