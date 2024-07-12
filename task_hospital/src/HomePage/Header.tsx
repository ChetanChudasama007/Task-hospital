// Header.tsx
import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
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

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>HealthSaarathi.com</HeaderTitle>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "40px",
          gap: "10px",
        }}
      >
        <button>Profile</button>
        <button>Settings</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
