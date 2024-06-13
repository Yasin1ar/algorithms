// given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

function chunk(arr, size) {
  /**
   * Splits an array into smaller chunks of a specified size.
   *
   * @param {Array} arr - The input array to be split.
   * @param {number} size - The desired size of each chunk.
   * @returns {Array} An array of arrays, where each sub-array contains `size` elements.
   */
  let d = arr.length / size;
  let baseArray = [];
  if (d < 1) {
    baseArray.push(arr);
    return baseArray;
  } else {
    while (d > 1) {
      baseArray.push(arr.slice(0, size));
      arr = arr.slice(size);
      d = arr.length / size;
    }
    baseArray.push(arr);
    return baseArray;
  }
}

// Testing
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4], 10));
