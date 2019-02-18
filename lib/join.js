/**
 * @name join
 * @description - Takes an array of values and "joins" (vague) them together using the provided separator
 * @param {Array} array 
 * @param {string} separator 
 * @return {string}
 */
export default function join(array, separator) {
    const arrayPrototype = Array.prototype;
    const nativeJoin = arrayPrototype.join;
    return array === null ? '' : nativeJoin.call(array, separator);
}

// array could probably just be an iterable
// need to jog my memory on getting 
// the loading