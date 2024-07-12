// Header.tsx
import React from "react";
import { HeaderContainer, HeaderTitle } from "./HeaderStyles";

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
