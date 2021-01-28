class SudokuValidator {
  rows: (null|number)[];

  cols: any[];

  grid: any[];

  constructor(rows: (null|number)[]) {
    this.rows = rows;
    this.cols = [];
    this.grid = [];
  }

  isValid() {
    this.reorganizeData(this.rows);

    return (
      SudokuValidator.validate(this.rows)
      && SudokuValidator.validate(this.cols)
      && SudokuValidator.validate(this.grid)
    );
  }

  // validate rows
  static validate(data: any[]) {
    for (let row = 0; row < 9; row++) {
      data[row].sort();

      for (let col = 0; col < 9; col++) {
        const value = data[row][col];
        const nextValue = data[row][col + 1];

        // check if value exists and is a valid number
        if (!(value && value > 0 && value < 10)) {
          return false;
        }

        // check if numbers are unique
        if (col !== 8 && value === nextValue) {
          return false;
        }
      }
    }
    return true;
  }

  // reorganize data into three structures
  reorganizeData(data: any[]) {
    // Prefilling the structures with empty array objects
    for (let i = 0; i < 9; i++) {
      this.cols.push([]);
      this.grid.push([]);
    }

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // Save each column in a new row
        this.cols[col][row] = data[row][col];

        // Calculate grid identifiers
        const gridRow = Math.floor(row / 3);
        const gridCol = Math.floor(col / 3);
        const gridIndex = gridRow * 3 + gridCol;

        // Save each grid in a new row
        this.grid[gridIndex].push(data[row][col]);
      }
    }
  }
}

export default SudokuValidator;
