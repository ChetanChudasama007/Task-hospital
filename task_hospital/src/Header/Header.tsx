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
  DropdownMenu,
  DropdownMenuItem,
} from "./HeaderStyles"; // Ensure these styles are defined in HeaderStyles.ts or similar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopover = () => {
    setPopoverVisible(!popoverVisible);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setPopoverVisible(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderTitle>HealthSaarathi.com</HeaderTitle>
      <HeaderRight>
        <IconWithDropdown onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faPlus} fontSize={25} />
          <span>▼</span>
          {dropdownVisible && (
            <DropdownMenu>
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenu>
          )}
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
