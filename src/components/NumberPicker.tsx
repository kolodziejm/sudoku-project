import styled from 'styled-components';

const PickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  right: -90px;
  width: 90px;
  z-index: 9;
`;

const PickerButton = styled.button`
  display: block;
`;

interface Props {
  handleClick: Function;
}

const OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function NumberPicker({ handleClick }: Props) {
  return (
    <PickerContainer>
      {OPTIONS.map((option, i) => (
        <PickerButton key={i} type="button" onMouseDown={() => handleClick(option)}>
          {option}
        </PickerButton>
      ))}
    </PickerContainer>
  );
}

export default NumberPicker;
