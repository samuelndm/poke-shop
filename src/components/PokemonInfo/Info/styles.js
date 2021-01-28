import styled from "styled-components";

export const Container = styled.div`
  margin: 15px 10px;
  padding: 30px;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 5px;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
