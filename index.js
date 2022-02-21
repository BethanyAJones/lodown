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
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: function takes in any values and returns that value unchanged
 * 
 * @param {any datatype}: function takes in a single parameter of any datatype
 * @return {any datatype}: function returns in a single parameter of any datatype 
 */
function identity (value){
    return value;
}

module.exports.identity = identity;



// **How to push Lodown Changes**
// -in terminal type >> cd ..
// -in terminal type >> cd lodown
// needs to be saved in the lodown repo
// cd .. 
// git add -A
// git commit -m "XYZ"
// git push