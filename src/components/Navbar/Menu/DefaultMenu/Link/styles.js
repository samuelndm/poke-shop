import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--yellow-color);
  border-radius: 3px;

  & a {
    color: var(--blue-color);
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      color: var(--blue-color);
    }
  }
`;
