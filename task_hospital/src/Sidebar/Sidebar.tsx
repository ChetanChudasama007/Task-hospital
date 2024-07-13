// Sidebar.tsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import {
  faGauge,
  faUserPlus,
  faUsers,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styled components
const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "250px" : "60px")};
  transition: width 0.3s;
  height: 100vh;
  background-color: #34495e;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const ToggleButton = styled.button`
  background-color: #16a085;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
`;

const MenuItem = styled.div<{ isOpen: boolean }>`
  padding: 15px;
  width: 100%;
  text-align: left;
  padding-left: ${(props) => (props.isOpen ? "20px" : "10px")};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #1abc9c;
    cursor: pointer;
  }
`;

const MenuItemText = styled.span<{ isOpen: boolean }>`
  padding-left: ${(props) => (props.isOpen ? "10px" : "0px")};
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding-left: 20px;
`;

const DropdownItem = styled.div`
  padding: 10px 0;
  &:hover {
    color: #1abc9c;
    cursor: pointer;
  }
`;

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [isPatientsDropdownOpen, setIsPatientsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const togglePatientsDropdown = () => {
    setIsPatientsDropdownOpen(!isPatientsDropdownOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar}>{isOpen ? "<" : ">"}</ToggleButton>
      <MenuItem isOpen={isOpen} onClick={togglePatientsDropdown}>
        <FontAwesomeIcon icon={faUsers} fontSize={20} />
        <MenuItemText isOpen={isOpen}>Patients</MenuItemText>
        {isOpen && (isPatientsDropdownOpen ? "▲" : "▼")}
      </MenuItem>
      <Dropdown isOpen={isPatientsDropdownOpen && isOpen}>
        <DropdownItem>
          <FontAwesomeIcon icon={faUserPlus} fontSize={20} />
          <MenuItemText isOpen={true}>New Patient</MenuItemText>
        </DropdownItem>
        <DropdownItem onClick={() => navigate("/patient-list")}>
          <FontAwesomeIcon icon={faNotesMedical} fontSize={20} />
          <MenuItemText isOpen={true}>Patient List</MenuItemText>
        </DropdownItem>
      </Dropdown>
      <MenuItem isOpen={isOpen}>
        <FontAwesomeIcon icon={faGauge} fontSize={20} />
        <MenuItemText isOpen={isOpen}>Dashboard</MenuItemText>
      </MenuItem>
      <MenuItem isOpen={isOpen}>Scheduling</MenuItem>
      <MenuItem isOpen={isOpen}>Medications</MenuItem>
      <MenuItem isOpen={isOpen}>Labs</MenuItem>
      <MenuItem isOpen={isOpen}>Imagings</MenuItem>
      <MenuItem isOpen={isOpen}>Incidents</MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
