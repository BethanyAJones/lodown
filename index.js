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
 * identity: Function takes in any values and returns that value unchanged.
 * 
 * @param {any datatype} value: a single parameter of any datatype to return
 * @return {any datatype} value: a single value of any datatype 
 */
function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: returns a string indicating the typeof input value based on given conditions 
 * It returns one of the following types:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 * 
 * @param {any datatype} value: a single parameter of any datatype to evaluate
 * @return {String}: a string indicating the typeof the input value
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
 * first: Function takes in an array and a number and returns the first element of an 
 * array that passes a given condition.  
 * 
 * @param {Array} array: an array from which a portion or a value is returned 
 * @param {Number} number: a number indicating the number of elements to return 
 * @return {Array} []: an empty array to be returned given a certain condition
 * @return {any datatype} array[0]: the first element of an array to be returned given a
 * certain condition
 * @return {Array} array.slice(0, number): an array comprised of the input number of elements
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
 * last: function takes in an array and a number and returns the last element of an 
 * array that passes a given condition.
 * 
 * @param {Array} array: an array from which a portion or a value is returned 
 * @param {Number} number: a number indicating the number of elements to return 
 * @return {Array} []: an empty array to be returned if the input array is not an array
 * @return {any datatype} array[array.length - 1]: the last element of an array to be 
 * returned given a certain condition
 * @return {Array} array: the input array is returned if the input number is greater than the 
 * array length
 * @return {Array} array.slice(array.length - number): an array comprised of the input number of elements
 * to be returned from the end of the input array
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
 * indexOf: function takes in an array and a value and evaluates the index of the first occurrance 
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
 * contains: function iterates through an input array and returns true if the input value is found,
 * otherwise returns false.
 * 
 * @param {Array} array: The input collection over which to iterate.
 * @param {any datatype} value: The input value representing the element to locate in the array.
 * @return {Boolean} true: a boolean of true representing that the input value was found in the array
 * @return {Boolean} false: a boolean of false representing that the input value was not found in the array
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
 * unique: Function takes in an array as a parameter and returns a new array with duplicates removed. 
 * Function utilizes the _.indexOf() function.
 * 
 * @param {Array} array: The input collection over which to iterate
 * @return {Array} newArray: The output array with duplicates removed
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
 * filter: Function takes in an input array and a function and calls the input 
 * function on each element in the input array. The returned results are pushed
 * into a new output array.
 * 
 * @param {Array} array: The input collection over which to iterate
 * @param {Function} func: The input function applied to each element of the input array
 * @return {Array} newArr: The output array comprised of the values returned from
 * the input function.
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
 * reject: Function takes in an array and a function as parameters and calls the input 
 * function on each element in the input array. Each element for which the function
 * returns false is pushed to a new array and returned as an output. 
 * 
 * @param {Array} array: The input collection over which to iterate.
 * @param {Function} func: The input function applied to each element of the input array.
 * @return {Array} rejectArr: The output array containing the elements for which the 
 * function returned false.
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
 * @return {Array} subArr1: The output array containing the elements for which the 
 * input function returned truthy.
 * @return {Array} subArr2: The output array containing the elements for which the 
 * input function returned falsy.
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
 * pluck: Function takes in an Array of objects and a Property as parameters. Using the 
 * map() function, an array is returned containing the value matching the Property input
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
 * in the input collection are falsy. 
 */
 CODE

module.exports.every = every;

/**
 * some: Function takes in 
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.some = some;

/**
 * reduce: Function takes in 
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.reduce = reduce;

/**
 * extend: Function takes in 
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.extend = extend;