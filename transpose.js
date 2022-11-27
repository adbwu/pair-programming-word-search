const transpose = function (matrix) {
  let finalMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let stagingArr = [];
    matrix.forEach(e => stagingArr.push(e[i]));
    finalMatrix.push(stagingArr);
  }
  return finalMatrix;
};

const transposeDiag = function(matrix) {
  let finalMatrix = [];
  let stagingMatrix = [];
  const newMatrix = (row, col) =>{
    if (matrix[row][col] !== undefined) {
      const getDiagArr = ((k, l) => {
        if (matrix[k] !== undefined && l < matrix[k].length) {
          stagingMatrix.push(matrix[k][l]);
          getDiagArr(k + 1, l + 1);
        }
      });
      getDiagArr(row, col);
      finalMatrix.push(stagingMatrix);
      stagingMatrix = [];
    }
  };
  const getByColumn = (row, col) => {
    if (col < matrix[0].length) {
      newMatrix(row, col);
      getByColumn(row, col + 1);
    }
  };
  const getByRow = (row, col) => {
    if (row >= 0) {
      newMatrix(row, col);
      getByRow(row - 1, 0);
    } else {
      getByColumn(0, 1);
    }
  };
  getByRow(matrix.length - 1, 0);
  return finalMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transposeDiag([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transposeDiag([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

module.exports = { transpose, transposeDiag };
