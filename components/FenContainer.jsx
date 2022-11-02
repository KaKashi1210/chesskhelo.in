import styled from "styled-components";
import { useChessState } from "../store/chess";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.green};
  width: 100%;
  height: auto;
  font-size: 13px;
`;

const FenTitle = styled.div`
  padding: ${({ theme }) => theme.layout.spaces.extraSmall};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.layout.spaces.extraSmall};
`;

const Fen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.layout.spaces.extraSmall};
  border-radius: ${({ theme }) => theme.layout.standardBorderRadius};
  margin: ${({ theme }) => theme.layout.spaces.small}
    ${({ theme }) => theme.layout.spaces.small} 0;
  word-wrap: break-word;
`;

export default function FenContainer() {
  const [chessState, _] = useChessState();

  return (
    <Container>
      <FenTitle>Forsyth-Edwards Notation (FEN)</FenTitle>
      <Fen>{chessState.chess.fen()}</Fen>
    </Container>
  );
}
