import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import GameResult from './components/GameResult';
import deepCloneArray from './utils/deepCloneArray';
import initSudokuBoard from './utils/initSudokuBoard';
import getReadOnlyFields from './utils/getReadOnlyFields';
import SudokuValidator from './utils/SudokuValidator';
import { STATE_SUCCESS, STATE_ERROR } from './config/constants';

const generatedBoard = initSudokuBoard();
const readOnlyFields = getReadOnlyFields(generatedBoard);

const GameContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

function App() {
  const [sudokuBoard, setSudokuBoard] = useState(
    deepCloneArray(generatedBoard),
  );
  const [gameState, setGameState] = useState('');

  function updateBoard(
    row: number,
    column: number,
    value: number|null|string,
  ) {
    const updatedSudokuBoard = deepCloneArray(sudokuBoard);
    updatedSudokuBoard[row][column] = value;

    setSudokuBoard(updatedSudokuBoard);
  }

  function validateBoard() {
    const sudokuValidator = new SudokuValidator(
      deepCloneArray(sudokuBoard),
    );

    const gameResult = sudokuValidator.isValid()
      ? STATE_SUCCESS : STATE_ERROR;

    setGameState(gameResult);
  }

  function resetBoard() {
    setSudokuBoard(deepCloneArray(generatedBoard));
    setGameState('');
  }

  useEffect(() => {
    const isBoardFilled = !sudokuBoard
      .flat()
      .includes(null);

    if (!isBoardFilled) {
      return;
    }

    validateBoard();
  }, [sudokuBoard]);

  return (
    <GameContainer>
      <GameBoard
        sudokuBoard={sudokuBoard}
        readOnlyFields={readOnlyFields}
        updateSudokuBoard={updateBoard}
      />
      <GameControls
        validateBoard={validateBoard}
        resetBoard={resetBoard}
      />
      {gameState && (
        <GameResult gameState={gameState} />
      )}
    </GameContainer>
  );
}

export default App;
