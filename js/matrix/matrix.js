function matrix(n) {
  /**
   * Generates an **n x n** matrix with a spiral pattern of numbers from **1** to **n^2**.
   *
   * @param {number} n - The size of the matrix (number of rows and columns).
   * @returns {number[][]} - A 2D array representing the spiral matrix.
   */
  let results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1,
    startRow = 0,
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  console.log(results);
}

matrix(4);
