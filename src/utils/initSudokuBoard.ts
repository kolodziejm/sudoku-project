import { makepuzzle } from 'sudoku';
import jsonChecker from './jsonChecker';

export default (customBoard?: any) => {
  if (Array.isArray(customBoard)) {
    return customBoard;
  }

  const isJson = jsonChecker(customBoard);

  if (isJson) {
    return JSON.parse(customBoard);
  }

  const sudokuItems = makepuzzle()
    .map((item: number | null) => {
      if (item === null) {
        return item;
      }

      return item + 1;
    });

  return [...Array(Math.ceil(sudokuItems.length / 9))]
    .map(() => sudokuItems.splice(0, 9));
};
