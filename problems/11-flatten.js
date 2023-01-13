/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
    //check if last el is an array, if it isnt, take that element and push to result
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i]);
        } else {
            result.push(...flatten(arr[i]));
        }
    }
    return result;

    // return arr.map( (el) => {
    //     if (!Array.isArray(el)) return el;
    //     if (Array.isArray(el)) return flatten(...el);
    // });
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
