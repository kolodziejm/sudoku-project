import styled from 'styled-components';
import Tile from './Tile';

const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const RowContainer = styled.div`
  display: flex;
`;

interface Props {
  sudokuBoard: any[];
  readOnlyFields: any[];
  updateSudokuBoard: Function;
}

function GameBoard({ sudokuBoard, readOnlyFields, updateSudokuBoard }: Props) {
  const boardTiles = sudokuBoard
    .map((row, rowNumber) => (
      <RowContainer key={rowNumber}>
        {
          row.map((value: number|null, column: number) => {
            const isReadOnly = readOnlyFields[rowNumber]
              .includes(column);

            return (
              <Tile
                key={`${rowNumber}-${column}`}
                row={rowNumber}
                column={column}
                tileValue={value}
                readOnly={isReadOnly}
                updateSudokuBoard={updateSudokuBoard}
              />
            );
          })
        }
      </RowContainer>
    ));

  return (
    <BoardContainer>
      {boardTiles}
    </BoardContainer>
  );
}

export default GameBoard;
