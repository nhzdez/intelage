import styled from "styled-components";

export const Stack = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }
  gap: ${(props) => props.gap};
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;
