function pyramid(n) {
  /**
   * Generates a pyramid pattern with '#' characters.
   *
   * @param {number} n - The number of rows in the pyramid.
   */
  let mid = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let line = "";
    for (let column = 0; column <= 2 * n - 1; column++) {
      if (column >= mid - row && column <= mid + row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
// testing output
pyramid(3);
pyramid(9);
pyramid(20);
