var matrix = [];
function nextZero (matrix, a) {
	for (let i = 0; i <9; i++) {
		for (let j = 0; j <9; j++) {
			if (!(matrix[i][j])) {
				a[0] = i;
				a[1] = j;
				return a;
			}
		}
	} 
	a[0] = -1;
	return a;
}
function isSuitable (matrix, row, col, num) {
	for (let i = 0; i <9; i++) {
		if ((matrix[row][i] === num) || (matrix[i][col] === num)) {
			return false;
		}
	}
	let boxRow = Math.floor(row/3)*3; boxCol = Math.floor(col/3)*3;
	for (let r = boxRow; r <boxRow+3; r++) {
		for (let c = boxCol; c <boxCol+3; c++) {
			if (matrix[r][c] === num) {
				return false;
			}
		}
	}
	return true;
}
function recursion (matrix) {
	let row = 0, col = 0;
	let a = [0, 0];
	a = nextZero(matrix, a);
	if (a[0] < 0) {
		return matrix;
		}
		row = a[0];
		col = a[1];
		for (let i = 1; i < 10 ; i++) {
			if (isSuitable(matrix, row, col, i)) {
				matrix[row][col] = i;
				if (recursion(matrix)){
					return true;
				}
				matrix[row][col] = 0;
			}
		}
	return false;
}
module.exports = function solveSudoku(matrix) {
	// your solution
	recursion(matrix);
	return matrix;
}
