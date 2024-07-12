// Sidebar.tsx
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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

const MenuItem = styled.div`
  padding: 15px;
  width: 100%;
  text-align: left;
  padding-left: ${(props: any) => (props.isOpen ? "20px" : "10px")};
  display: flex;
  align-item: center;
  justify-content: center;
  &:hover {
    color: #1abc9c;
    cursor: pointer;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding-left: ${(props) => (props.isOpen ? "20px" : "10px")};
`;

const DropdownItem = styled.div`
  padding: 10px 0;
  padding-left: 20px;
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
      <MenuItem onClick={togglePatientsDropdown}>
        <span style={{ paddingRight: "10px" }}> Patients</span>
        {isOpen && (isPatientsDropdownOpen ? "▲" : "▼")}
      </MenuItem>
      <Dropdown isOpen={isPatientsDropdownOpen && isOpen}>
        <DropdownItem>New Patient</DropdownItem>
        <DropdownItem onClick={() => navigate("/patient-list")}>
          Patient List
        </DropdownItem>
      </Dropdown>
      <MenuItem>Dashboard</MenuItem>
      <MenuItem>Scheduling</MenuItem>
      <MenuItem>Medications</MenuItem>
      <MenuItem>Labs</MenuItem>
      <MenuItem>Imagings</MenuItem>
      <MenuItem>Incidents</MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
