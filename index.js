'use strict';

// YOU KNOW WHAT TO DO //
// functions should be declarations not expression

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, func){
    if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    } else {
        for (let i in collection){
            func(collection[i], i, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Function takes in any value and returns that value unchanged.
 * 
 * @param {any datatype} value: a single parameter of any datatype to return.
 * @return {any datatype} value: a single value of any datatype. 
 */
function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Function returns a String indicating the input values type based on given conditions.
 * It returns one of the following types:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "date"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 * 
 * @param {any datatype} value: a single parameter of any datatype to evaluate
 * @return {String}: a String indicating the typeof the input value
 */
function typeOf(value){
    if(Array.isArray(value)) return 'array';
    if(value === null) return 'null';
    if(value instanceof Date === true ) return 'date';
    if(typeof value === 'string') return 'string';
    if(typeof value === "function") return 'function';
    if(typeof value === 'object') return 'object';
    if(typeof value === 'number') return 'number';
    if(typeof value === 'boolean') return 'boolean';
    else return 'undefined';
}
module.exports.typeOf = typeOf;

/**
 * first: Function takes in an input Array and a Number and 
 * returns the first element of input Array that passes a given condition.  
 * 
 * @param {Array} array: an input Array from which a portion or a value is returned 
 * @param {Number} number: a Number indicating the number of elements to return 
 * @return {Array} []: an empty Array to be returned given a certain condition
 * @return {any datatype} array[0]: the first element of the input Array to be returned given a
 * certain condition
 * @return {Array} array.slice(0, number): a new Array comprised of the input number of elements
 * to be returned given a certain condition
 */
function first(array, number){

    if(!Array.isArray(array) || number < 0){
        return [];
    }
    if(isNaN(number) || number === undefined){
        return array[0];
    } else {
        return array.slice(0, number);
    }
}
module.exports.first = first;


/**
 * last: function takes in an Array and a Number and returns the last element of the input 
 * Array that passes a given condition.
 * 
 * @param {Array} array: an Array from which a portion or a value is returned. 
 * @param {Number} number: a Number indicating the number of elements to return from
 * the input Array.
 * @return {Array} []: an empty Array to be returned if the input Array is not an Array.
 * @return {any datatype} array[array.length - 1]: the last element of the input Array to be 
 * returned given a certain condition.
 * @return {Array} array: the input Array is returned if the input number is 
 * greater than the Array length.
 * @return {Array} array.slice(array.length - number): a new Array comprised of the input number of elements
 * to be returned from the end of the input Array.
 */
function last(array, number){
    if(!Array.isArray(array) || number < 0){ 
        return [];
    }
    if(!Number.isInteger(number) || number == undefined){
        return array[array.length - 1];
    }
    if(number > array.length){
        return array;
    } else {
        return array.slice(array.length - number);
    }
}
module.exports.last = last;

/**
 * indexOf: Function takes in an Array and a value and evaluates the index of the first occurrance 
 * of the input value.
 * 
 * @param {Array} array: The input collection over which to iterate.
 * @param {any datatype} value: The input value representing the element to locate in the array.
 * @return {Number} i: A number representing the index in the array at which the element is first
 * found.
 * @return {Number} -1: A number representing that the target input value was not found in the array
 */
function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] == value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: function iterates through an input Array and returns true if the input value 
 * is found, otherwise returns false.
 * 
 * @param {Array} array: The input collection over which to iterate.
 * @param {any datatype} value: The input value representing the element to locate 
 * in the Array.
 * @return {Boolean} true: a Boolean of true representing that the input value was 
 * found in the input Array. 
 * @return {Boolean} false: a Boolean of false representing that the input value 
 * was not found in the input Array.
 */
function contains(array, value){ 
    let containsVal = false;
    for (let i = 0; i < array.length; i++){
        if (array[i] === value) {
            containsVal = true;
        }   
    }
    return (containsVal) ? true : false;
}
module.exports.contains = contains;

/**
 * unique: Function takes in an Array as a parameter and returns a new 
 * Array with duplicates removed. Function utilizes the indexOf() function.
 * 
 * @param {Array} array: The input collection over which to iterate.
 * @return {Array} newArray: The output Array with duplicates removed.
 */
function unique(array){ 
    let newArray = [];
    for(var i = 0; i < array.length; i++){
        if(_.indexOf(newArray, array[i]) == -1)
        newArray.push(array[i])
    }
    return newArray;
}
module.exports.unique = unique;

/**
 * filter: Function takes in an input Array and a Function and calls the input 
 * Function on each element in the input Array. The results from the input Function
 * that are returned true are pushed into a new output array.
 * 
 * @param {Array} array: The input collection over which to iterate.
 * @param {Function} func: The input function applied to each element of the input array.
 * @return {Array} newArr: The output array comprised of the values returned from
 * the input function that returned true.
 */
function filter(array, func){
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        let results = func(array[i], i, array);
        if(results){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
module.exports.filter = filter;

/**
 * reject: Function takes in an Array and a Function as parameters and calls the input 
 * Function on each element of the input Array. Each element for which the Function
 * returns false is pushed to a new Array and returned as an output. This function 
 * represents the logical inverse of the filter() function. 
 * 
 * @param {Array} array: The input collection over which to iterate.
 * @param {Function} func: The input Function applied to each element of the input Array.
 * @return {Array} rejectArr: The output Array containing the elements for which the 
 * input Function returned false.
 */
function reject(array, func){
    let rejectArr = [];
    for(let i = 0; i < array.length; i++){
        let results = func(array[i], i, array);
        if(!results){
            rejectArr.push(array[i]);
        }
    }
    return rejectArr;
}
module.exports.reject = reject;

/**
 * partition: Function takes in an Array and a Function as parameters and calls the Function
 * on each element in the input Array. The output is one of two arrays depending
 * on whether the Function input returned something truthy or falsy. 
 * 
 * @param {Array} array: The input collection over which to iterate.
 * @param {Function} func: The input function applied to each element of the input array.
 * @return {Array} Arr: The output array containing two sub-arrays: one containing the elements
 * for which the input Function returned truthy, the other containing the elements for 
 * which the input Function returned falsy.
 */
function partition(array, func){ 
    let Arr = [];
    let subArr1 = [];
    let subArr2 = [];
    for(let i = 0; i < array.length; i++){
        let results = func(array[i], i, array);
        if(results){
            subArr1.push(array[i]);
        } else {
            subArr2.push(array[i]);
        }
    }
    Arr.push(subArr1);
    Arr.push(subArr2);
    return Arr;
}
module.exports.partition = partition;

/**
 * map: Function takes in a Collection and a Function and calls the input Function on each 
 * element in the collection. Depending on whether the Collection is an Array or an 
 * Object, a new array containing the value or element is returned. 
 * 
 * @param {Array or Object} collection: The input collection over which to iterate.
 * @param {Function} func: The input function to call on each element in the input collection.
 * @return {Array} saved: The output array in which the returned elements are stored.
 */
function map(collection, func){
    let saved = [];
    if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            saved.push(func(collection[i], i, collection));
        }
    } else {
        for (let key in collection){
            saved.push(func(collection[key], key, collection)); 
        }
    }
    return saved; 
}
module.exports.map = map;

/**
 * pluck: Function takes in an Array of Objects and a Property as parameters. Using the 
 * map() function, an Array is returned containing the value matching the Property input
 * for every element in the input Array.
 * 
 * @param {Array of Objects} arrObj: The array of objects through which to iterate.
 * @param {any datatype} prop: The target object property to find and its value return
 * in a new array. 
 * @return {Array} arrValues: The new array to return with the values found in the input
 * array of objects. 
 */
function pluck(arrObj, prop){
     const arrValues = _.map(arrObj, function(element, i, arrObj){return element[prop]});
     return arrValues;
}
module.exports.pluck = pluck;

/**
 * every: Function takes in an input Collection and a Function and is designed to return 
 * a Boolean False if even one element in the input Collection is falsy. Otherwise, if 
 * all elements are truthy, it returns a Boolean True.
 * 
 * @param {Array or Object} collection: The input collection through which to iterate.
 * @param {Function} func: The input function that evalutes whether the elements in the 
 * input collection are truthy or falsy. 
 * @return {Boolean} true: A boolean of true is returned if all elements in the input collection
 * are truthy. 
 * @return {Boolean} false: A boolean of false is returned if even one of the elements 
 * in the input collection is falsy. 
 */
function every(collection, func){ 
    let isTrue = true;
     if(func){
        _.each(collection, function(element, index, collection){
            if (!func(element, index, collection)){
            isTrue = false;
           }
           else return true;
        }
        );
    }
    
    if(!func){
        _.each(collection, function(element, index, collection){
            if (!element){
            isTrue = false;
           }
           else return true;
        });
    }
    return isTrue;
}
module.exports.every = every;

/**
 * some: Function takes in a Collection of either an object or an array and a Function. It 
 * returns true if the result of calling the input Function on the Collection elements
 * returns true for at least one element. Otherwise it returns false. 
 * 
 * @param {Array or Object} collection: The input Collection through which to iterate and call
 * the input Function.
 * @param {Function} func: The input Function to call on each element in the input Collection.
 * @return {Boolean} oneTrue: A boolean of true is returned if the input Function returns true
 * on at least one element in the input collection. Otherwise, a boolean of false is returned 
 * if the input Function returns false on all of the elements in the input collection.
 */
function some(collection, func){
    let oneTrue = false;
    if(func){
        _.every(collection, function(element, index, collection){
            if (func(element, index, collection)){
                oneTrue = true;
                return true;
            }
                else return false;
            }
            );
        };
    if(!func){
         _.every(collection, function(element, index, collection){
            if(element){
                oneTrue = true;
                return true; 
            }
                else return false;
            })
     };
    
    return oneTrue;
}
module.exports.some = some;

/**
 * reduce: Function takes in an input Array, a Function, and a Seed as parameters. It calls
 * the input Function on every element in the Array in order and passes in the return value 
 * calculated from the previous element. The end result is a single value. 
 * 
 * @param {Array} array: An input Array through which to iterate and call the input Function.
 * @param {Function} func: An input Function to call on every element in the array and perform
 * an action that reduces the array elements into a single value.
 * @param {Number} seed: An input Number providing a starting value for the input Function's 
 * 'previous' parameter. If no seed is provided, the seed is assigned the value of the first
 * element in the input Array. 
 * @return {Number} previous: A single Number representing the end result of calling the input
 * Function on each element of the input Array. 
 */
function reduce(array, func, seed){
    let previous = seed;
    if(seed){
    for(var i = 0; i < array.length; i++){
      if(i !== array.length){
        previous = func(previous, array[i], i);
        console.log(previous);
      } else {
        return previous;
    }
  }
}
  if(seed === undefined){
    previous = array[0];
    for(var i = 1; i < array.length; i++){ //
        if(i !== array.length){
          previous = func(previous, array[i], i);
          console.log(previous);
      } else {
        return previous;  
      }
    }
  }
    return previous;
}
module.exports.reduce = reduce;

/**
 * extend: Function takes in at least two or more Objects and adds the key-value pairs
 * from all of the Objects into the first input Object, updating any keys with the same
 * name. It returns the updated first input Object. 
 * 
 * @param {Object(s)} ...objs: One or more input Objects through which to iterate.
 * @return {Object} objs[0]: The first input Object is returned with the key-value pairs
 * of the remaining input Objects.
 */
function extend(...objs){
        for(let i = 1; i < objs.length; i++){
          for(let key in objs[i]){
            objs[0][key] = objs[i][key];
            console.log(objs);
      }
        }
        return objs[0];
}
module.exports.extend = extend;