'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 _.each = function(collection, func){
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
 * identity: function takes in any values and returns that value unchanged
 * 
 * @param {any datatype} value: a single parameter of any datatype to return
 * @return {any datatype} value: a single value of any datatype 
 */
function identity (value){
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
 * @return {String}: a string indicating the typeof of the input value
 */
 _.typeOf = function(value){
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
 * first: function takes in an array and a number and returns the first element of an 
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
 _.first = function(array, number){

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
 _.last = function(array, number){
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
 _.indexOf = function(array, value){
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
 _.contains = function(array, value){ 
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
 * unique: function description
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.unique = unique;

/**
 * filter: function description
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.filter = filter;

/**
 * reject: function description
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.reject = reject;

/**
 * partition: function description
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.partition = partition;

/**
 * map: function description
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.map = map;

/**
 * pluck: function description
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.pluck = pluck;

/**
 * every: function description
 * 
 * @param {Function} name: 
 * @param {Array or Object} name:
 * @param {any datatype} name:
 * @return {String} name:
 * @param {} name: description of input parameters
 * @return {} name: description of return
 */
 CODE

module.exports.every = every;

/**
 * some: function description
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
 * reduce: function description
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
 * extend: function description
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