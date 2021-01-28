import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const ControlsButton = styled.button`
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  margin: 0 8px;
  padding: 8px 16px;
`;

interface Props {
  validateBoard: React.MouseEventHandler<HTMLButtonElement>;
  resetBoard: React.MouseEventHandler<HTMLButtonElement>;
}

function GameControls({ validateBoard, resetBoard }: Props) {
  return (
    <ControlsContainer>
      <ControlsButton
        type="button"
        onClick={validateBoard}
      >
        Validate
      </ControlsButton>
      <ControlsButton
        type="button"
        onClick={resetBoard}
      >
        Reset
      </ControlsButton>
    </ControlsContainer>
  );
}

export default GameControls;
