// styles.ts
import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 10px;
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;
