import styled from 'styled-components';
import { STATE_SUCCESS } from '../config/constants';

interface Props {
  gameState: string;
}

const ResultContainer = styled.div`
  margin-top: 32px;
`;

const ResultText = styled.h4`
  text-align: center;
  color: ${(p: Props) => (p.gameState === STATE_SUCCESS ? 'green' : 'red')};
`;

function GameResult({ gameState }: Props) {
  let message = 'Invalid board';

  if (gameState === STATE_SUCCESS) {
    message = 'Valid board';
  }

  return (
    <ResultContainer>
      <ResultText gameState={gameState}>{message}</ResultText>
    </ResultContainer>
  );
}

export default GameResult;
