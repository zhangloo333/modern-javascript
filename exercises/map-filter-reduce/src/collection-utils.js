/**
 * Invoke a function for each item in an array
 *
 * @export
 * @param {array} array Array to iterate over
 * @param {function} transformFunc function to invoke
 * @return {null} nothing
 */
export function forEach(array, transformFunc) {
  reduce(array, (transformedArray, currentItem) => {
    transformedArray.push(
      transformFunc(currentItem)
    );
    return transformedArray;
  }, []);
}

/**
 * Create a transformed copy of an array, where
 * a transformation function is applied to each item
 *
 * @export
 * @param {array} array list of items to transoform
 * @param {function} transformFunc transformation function
 * @return {array} transformed items
 */
export function map(array, transformFunc) {
  return reduce(array, (transformedArray, currentItem) => {
    transformedArray.push(
      transformFunc(currentItem)
    );
    return transformedArray;
  }, []);
}

/**
 * Create a filtered array, given an original array and
 * a filtering function to be invoked on each element.
 * Only those elements where the filtering function returns
 * true will be in the returned filtered array.
 *
 * @export
 * @param {array} array original array
 * @param {function} func filtering function
 * @return {array} filtered array
 */
export function filter(array, func) {
  return reduce(array, (filteredResults, currentItem) => {
    if (func(currentItem)) {
      filteredResults.push(currentItem);
    }
    return filteredResults;
  }, []);
}

/**
 * Generate a singular value by iterating over an array.
 * More info: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @export
 * @param {Array} array original array
 * @param {Function} reducer reducer function
 * @param {any} initialVal initial value of accumulator
 * @return {any} ultimate value of the accumulator
 */
export function reduce(array, reducer, initialVal) {
  let accumulator = initialVal;
  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
}