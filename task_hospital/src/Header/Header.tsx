// Header.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderTitle,
  PopoverContainer,
  PopoverItem,
  HeaderRight,
  IconWithDropdown,
} from "./HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderTitle>HealthSaarathi.com</HeaderTitle>
      <HeaderRight>
        <IconWithDropdown>
          <FontAwesomeIcon icon={faPlus} fontSize={25} />
          <span>▼</span>
        </IconWithDropdown>
        <IconWithDropdown onClick={togglePopover}>
          <FontAwesomeIcon icon={faUser} fontSize={25} />
          <span>▼</span>
        </IconWithDropdown>
        <PopoverContainer visible={popoverVisible}>
          <PopoverItem onClick={handleLogout}>Logout</PopoverItem>
        </PopoverContainer>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
