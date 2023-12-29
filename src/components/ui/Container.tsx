import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: block;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Container;
