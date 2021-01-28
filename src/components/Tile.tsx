import { useState } from 'react';
import styled from 'styled-components';
import NumberPicker from './NumberPicker';

const TileContainer = styled.div`
  position: relative;
`;

const TileInput = styled.input`
  display: block;
  width: 3rem;
  height: 4rem;
  text-align: center;
`;

interface Props {
  row: number;
  column: number;
  tileValue: number | null;
  readOnly: boolean;
  updateSudokuBoard: Function;
}

function Tile({
  row, column, tileValue, readOnly, updateSudokuBoard,
}: Props) {
  const [isFocused, setFocus] = useState(false);

  const showPicker = isFocused && !readOnly;

  function syncValues(value: number) {
    updateSudokuBoard(row, column, value);
  }

  function onInputChanged(event: any) {
    const { value } = event.target;

    const eventValue = value ? Number.parseInt(value, 10) : value;

    if (eventValue <= 0 || eventValue > 9) {
      return;
    }

    syncValues(eventValue);
  }

  function onPickerClick(optionValue: number) {
    syncValues(optionValue);
  }

  function toggleFocus() {
    setFocus((prevState) => !prevState);
  }

  return (
    <TileContainer>
      <TileInput
        type="number"
        value={tileValue || ''}
        disabled={readOnly}
        onChange={onInputChanged}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        min={1}
        max={9}
      />
      {showPicker && (
      <NumberPicker
        handleClick={onPickerClick}
      />
      )}
    </TileContainer>
  );
}

export default Tile;
