import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ numberOfColumns = 2 }: { numberOfColumns: number }) => numberOfColumns},
    1fr
  );
`;
